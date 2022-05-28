import tinycolor from 'tinycolor2'; // fixme: remove dep?
import Vector4 from '../math/Vector4';
import { isUndef, isNumber, isString, isHex, clamp } from '@/utils';

const normalize = (a, min, max) => {
  const hex = isHex(a);
  const diff = max - min;
  let v = clamp(Number.parseFloat(`${a}`), min, max);
  if (hex) {
    v = Number.parseInt('' + a * max, 10) / 100;
  }
  return Math.abs(v - max) < 1e-6 ? 1 : a % diff / diff;
};

export default class Color {
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  constructor (v = 0, g?: number, b?: number, a = 1) {
    this.r = 1;
    this.g = 1;
    this.b = 1;
    this.a = 1;

    if (isUndef(g) && isUndef(b)) {
      if (isNumber(v) && v <= 255) {
        this.setRGB(v, v, v);
      } else if (isString(v) && tinycolor.names[v]) {
        this.fromHex(tinycolor.names[v]);
      } else {
        const rgb = tinycolor(v).toRgb();
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

  fromHex (string) {
    const color = tinycolor(string).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  fromHSL (h, s, l, a = 1) {
    const color = tinycolor({
      h,
      s,
      l,
      a,
    }).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  fromHSV (h, s, v, a = 1) {
    const color = tinycolor({
      h,
      s,
      v,
      a,
    }).toRgb();
    return this.setRGBA(color.r, color.g, color.b, color.a);
  }

  setRGB (r, g, b) {
    this.setRGBA(r, g, b, this.a);
    return this;
  }

  setRGBA (r, g, b, a, isOrigin?: boolean) {
    this.r = isOrigin ? r : normalize(r, 0, 255);
    this.g = isOrigin ? g : normalize(g, 0, 255);
    this.b = isOrigin ? b : normalize(b, 0, 255);
    this.setAlpha(a);
    return this;
  }

  setAlpha (alpha) {
    if (alpha > 1) {
      this.a = normalize(alpha, 0, 255);
    } else {
      this.a = alpha;
    }
    return this;
  }

  toHex () {
    return tinycolor(this.toObject()).toHex(true);
  }

  toHSL () {
    return tinycolor(this.toObject()).toHsl();
  }

  toHSV () {
    return tinycolor(this.toObject()).toHsv();
  }

  toObject (isNormalization = false) {
    const m = !isNormalization ? 1 : 255;
    return {
      r: this.r * m,
      g: this.g * m,
      b: this.b * m,
      a: this.a,
    };
  }

  toArray () {
    return [this.r, this.g, this.b, this.a];
  }

  toVector () {
    return new Vector4().fromArray(this.toArray());
  }

  toString () {
    return ''
      .concat(this.constructor.name, '(')
      .concat(String(this.r), ', ')
      .concat(String(this.g), ', ')
      .concat(String(this.b), ', ')
      .concat(String(this.a), '})');
  }
}
