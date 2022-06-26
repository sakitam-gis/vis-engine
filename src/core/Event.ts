import { isString, isRegexp } from '../utils';

type Keys<T> = Extract<keyof T, string>;

export type IOptions = {
  /**
  * 指定事件名称的合法值的正则表达式
  */
  validEventTypes?: RegExp[];
}

class Event {
  public readonly type: string

  constructor (type: string, params = {}) {
    this.type = type;
    (Object.getOwnPropertyNames(params) || []).forEach(key => {
      this[key] = params[key];
    });
  }
}

/**
 * 事件中心（实现的发布订阅者模式）
 *
 * 简单使用：
 * ```
 * const e = new EventEmitter();
 *
 * const handler = (data) => {
 *   console.log(data);
 * };
 *
 * e.on('eventName', handler);
 *
 * e.emit('eventName', { data: 'data' });
 *
 * // 取消订阅
 * e.off('eventName', handler);
 *
 * // 清除所有的订阅者
 * e.clear();
 * ```
 */
export default class EventEmitter<EventsMap extends Record<string, any> = Event> {
  private fns: Map<Keys<EventsMap>, any>;
  private readonly validateEventTypes: RegExp[];

  constructor({validEventTypes = [/.*/]}: IOptions = {}) {
    this.fns = new Map();
    this.validateEventTypes = validEventTypes;
  }

  /**
   * 判断事件类型是否合法
   * @param type
   * @private
   */
  private validateEventType(type) {
    let vs = this.validateEventTypes;
    if (!Array.isArray(this.validateEventTypes)) {
      vs = [this.validateEventTypes];
    }
    let isValid = true;
    vs.forEach((r) => {
      if (isRegexp(r) && !r.test(type)) {
        isValid = false;
      }
    });

    if (!isValid) {
      throw new Error(`Invalid Event Type: '${type}'.\nEvent type should be any of: ${vs}.`);
    }
  }

  /**
   * 添加订阅者
   * @param type 事件类型
   * @param handler 回调函数
   * @param context 上下文
   */
  on(type, handler, context?: any) {
    this.validateEventType(type);
    if (isString(type)) {
      const names = type.split(' ');
      if (names.length > 1) {
        names.forEach(t => {
          this.on(t, handler, context);
        });
        return this;
      }
    }
    if (!this.has(type)) {
      this.fns.set(type, []);
    }
    this.fns.get(type).push(handler);
    return this;
  }

  /**
   * 添加一次性订阅者
   * @param type
   * @param handler
   * @param context
   */
  once(type, handler, context?: any) {
    this.validateEventType(type);
    if (isString(type)) {
      const names = type.split(' ');
      if (names.length > 1) {
        names.forEach(t => {
          this.once(t, handler, context);
        });
        return this;
      }
    }
    const onceHandler = (...args) => {
      this.off(type, onceHandler);
      handler.call(context || this, ...args);
    };
    return this.on(type, onceHandler, context);
  }

  /**
   * 取消监听
   * @param type
   * @param handler
   * @param context
   */
  off(type, handler?: any, context?: any) {
    this.validateEventType(type);
    if (isString(type)) {
      const names = type.split(' ');
      if (names.length > 1) {
        names.forEach(t => {
          this.off(t, handler, context);
        });
        return this;
      }
    }
    const handlers = this.has(type);
    if (handlers) {
      if (handler) {
        const fns = handlers.filter((h) => h !== handler);
        this.fns.set(type, fns);
      } else {
        this.fns.delete(type);
      }
    }
    return this;
  }

  /**
   * 触发事件
   * @param type
   * @param args
   */
  emit(type, args?: any) {
    const eventObject = type instanceof Event
      ? type
      : new Event(type, args);
    this.validateEventType(eventObject.type);
    const fns = this.has(eventObject.type);
    if (fns) {
      return fns.map((fn => fn.call(this, eventObject)));
    }
  }

  has(type) {
    return this.fns.get(type);
  }

  /**
   * 清空所有的订阅者
   */
  clear() {
    this.fns.clear();
    return this;
  }
}
