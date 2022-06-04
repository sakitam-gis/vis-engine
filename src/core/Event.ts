import { isString, isRegexp } from '../utils';

type Keys<T> = Extract<keyof T, string>;

export type IOptions = {
  validEventTypes?: RegExp[];
}

export class Event {
  public readonly type: string

  constructor (type: string, params = {}) {
    this.type = type;
    (Object.getOwnPropertyNames(params) || []).forEach(key => {
      this[key] = params[key];
    });
  }
}

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
      type.split(' ').forEach(t => {
        this.on(t, handler, context);
      });
      return this;
    }
    if (!this.has(type)) {
      this.fns.set(type, []);
    }
    this.validateEventType(type);
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
      type.split(' ').forEach(t => {
        this.once(t, handler, context);
      });
      return this;
    }
    this.validateEventType(type);
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
  off(type, handler, context?: any) {
    this.validateEventType(type);
    if (isString(type)) {
      type.split(' ').forEach(t => {
        this.off(t, handler, context);
      });
      return this;
    }
    const handlers = this.has(type);
    if (handlers) {
      if (handler) {
        const fns = handlers.filter((h) => h !== handlers);
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
  emit(type, args) {
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
