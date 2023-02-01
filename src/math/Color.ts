import { colord, extend } from 'colord';
import type { AnyColor } from 'colord';
import namesPlugin from 'colord/plugins/names';
import Vector4 from '../math/Vector4';
import Vector3 from '../math/Vector3';
import { isUndef, isNumber, isHex, clamp } from '../utils';

extend([namesPlugin]);

/**
 * 归一化
 * @param a
 * @param min
 * @param max
 */
const normalize = (a, min, max) => {
  const hex = isHex(a);
  const diff = max - min;
  let v = clamp(Number.parseFloat(`${a}`), min, max);
  if (hex) {
    v = Number.parseInt('' + a * max, 10) / 100;
  }
  return Math.abs(v - max) < 1e-6 ? 1 : (a % diff) / diff;
};

/**
 * 一个表示颜色的类，可以使用这个类来初始化颜色
 * ```ts
 * // 默认是白色
 * const color1 = new Color();
 *
 * // 16进制颜色
 * const color2 = new Color('#ff0000');
 *
 * // RGB
 * const color3 = new Color('rgb(255, 0, 0)');
 * const color3 = new Color({ r: 255, g: 255, b: 255 });
 * const color3 = new Color({ r: 255, g: 255, b: 255, a: 1 });
 *
 * // css 颜色名称
 * const color5 = new Color('skyblue');
 *
 * // HSL
 * const color6 = new Color('hsl(0, 100%, 50%)');
 *
 * // HSV
 * const color6 = new Color({ h: 360, s: 100, v: 100, a: 1 });
 *
 * // 设置 rgba 值, 支持归一化和非归一化的值
 * const color7 = new Color(1, 0, 0);
 * const color7 = new Color(1, 0, 0, 1, true);
 * ```
 */
export default class Color {
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  /**
   * @param v 可以是 rgba 的 r 通道值，也可以是 AnyColor
   * @param g g 通道
   * @param b b 通道
   * @param a alpha 通道
   * @param isNormalized 是否是归一化的数值
   */
  constructor(v: number | AnyColor = 255, g?: number, b?: number, a = 1, isNormalized = false) {
    this.r = 1;
    this.g = 1;
    this.b = 1;
    this.a = 1;

    /**
     * 如果仅传入一个值，说明要么是数字要么是一个表示颜色的字符串或者对象
     */
    if (isUndef(g) && isUndef(b)) {
      // 此处是（0-255 的值）可能和 three 不太一样
      if (isNumber(v) && v <= 255) {
        this.setRGBA(v, v, v, this.a, isNormalized);
      } else {
        // css 变量和颜色字符串都在此处解析
        const rgb = colord(v as AnyColor).toRgb();
        if (rgb) {
          this.setRGBA(rgb.r, rgb.g, rgb.b, rgb.a);
        } else {
          console.error('Unsupported color value {'.concat(String(v), '} provided'));
        }
      }
    } else {
      this.setRGBA(v, g, b, a);
    }
  }

  /**
   * 解析颜色，凡是可以被 [colord](https://github.com/omgovich/colord) 解析的都可以使用
   * @param c
   */
  fromColor(c: AnyColor) {
    const color = colord(c).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  /**
   * 解析 hsl 颜色
   * @param h
   * @param s
   * @param l
   * @param a
   */
  fromHSL(h, s, l, a = 1) {
    const color = colord({
      h,
      s,
      l,
      a,
    }).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  /**
   * 解析 hsv 颜色
   * @param h
   * @param s
   * @param v
   * @param a
   */
  fromHSV(h, s, v, a = 1) {
    const color = colord({
      h,
      s,
      v,
      a,
    }).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  /**
   * 设置 rgb 数值
   * @param r r 值，一般为 0-255
   * @param g g 值，一般为 0-255
   * @param b b 值，一般为 0-255
   */
  setRGB(r: number, g: number, b: number) {
    this.setRGBA(r, g, b, this.a);
    return this;
  }

  /**
   * 设置各通道的值
   * @param r red 通道
   * @param g green 通道
   * @param b blue 通道
   * @param a alpha 通道
   * @param isNormalized 是否已经归一化（一般从颜色字符串解析的都是未归一化的）
   */
  setRGBA(r, g, b, a, isNormalized?: boolean) {
    this.r = isNormalized ? r : normalize(r, 0, 255);
    this.g = isNormalized ? g : normalize(g, 0, 255);
    this.b = isNormalized ? b : normalize(b, 0, 255);
    this.setAlpha(a);
    return this;
  }

  /**
   * 设置 alpha 通道
   * @param alpha
   */
  setAlpha(alpha) {
    if (alpha > 1) {
      this.a = normalize(alpha, 0, 255);
    } else {
      this.a = alpha;
    }
    return this;
  }

  /**
   * 输出 16 进制字符串
   */
  toHex() {
    return colord(this.toObject()).toHex();
  }

  /**
   * 输出 hsl 对象
   */
  toHSL() {
    return colord(this.toObject()).toHsl();
  }

  /**
   * 输出 hsv 对象
   */
  toHSV() {
    return colord(this.toObject()).toHsv();
  }

  /**
   * 将颜色转换为对象
   * @param isNormalized 是否进行归一化，默认采用 0-255
   */
  toObject(isNormalized = false) {
    const m = isNormalized ? 1 : 255;
    return {
      r: this.r * m,
      g: this.g * m,
      b: this.b * m,
      a: this.a,
    };
  }

  /**
   * 转换为数组（一般已经归一化。可以直接传递给 gl）
   */
  toArray() {
    return [this.r, this.g, this.b, this.a];
  }

  /**
   * 转换为 Vector4
   */
  toVector() {
    return new Vector4().fromArray(this.toArray());
  }

  /**
   * 转换为 Vector3
   */
  toVector3() {
    return new Vector3().fromArray(this.toArray());
  }

  /**
   * 转换为字符串
   */
  toString() {
    return `${this.constructor.name}(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

export type ColorLike =
  | Color
  | {
      r: number;
      g: number;
      b: number;
      a?: number;
    };
