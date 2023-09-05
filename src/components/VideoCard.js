import { Lightning, Utils } from "@lightningjs/sdk";

export class VideoCard extends Lightning.Component {
    static _template() {
      return {
        w: 300,
        h: 450,
        Image: {
          w: w => w,
          h: h => h - 50,
        },
      };
    }
  
    set item(obj) {
      const { label, src } = obj;
      this.patch({
        Image: { src },
      });
    }
  
    _focus() {
      this.patch({
        smooth: { color: 0xff005500, scale: 1.1 },
        shader: { type: Lightning.shaders.Outline, stroke: 1.1, color: 0xff09f676 },
      });
    }
  
    _unfocus() {
      this.patch({
        smooth: { color: 0xffffffff, scale: 1.0 },
        shader: { type: Lightning.shaders.Outline, stroke: 0, color: 0x0000000 },
      });
    }
  }
  