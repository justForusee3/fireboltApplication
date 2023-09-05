// import { Lightning } from '@lightningjs/sdk';

// export class MyButton extends Lightning.Component {
//     static _template() {
//         return {
//           // Add a colored rectangle as the background of the button
//           Background: {
//             w: 300,
//             h: 100,
//             rect: true,
//             color: 0xff007AFF, // Blue color
//           },
//           Label: {
//             x: 100,
//             y: 40,
//             text: {
//               text: 'Click Me!',
//               fontSize: 28,
//               textColor: 0xffffffff, // White color
//             },
//           },
//           FocusColor: {
//             w: 220,
//             h: 100,
//             rect: true,
//             color: 0xff00ff00, // Green color for focus
//             alpha: 0, // Initially hidden
//           },
//         };
//       }

//   _focus() {
//     this.patch({
//       Label: {
//         text: {
//           fontSize: 50,
//         },
//       },
//     });
//   }

//   _handleEnter() {
//     // Navigate to the video player page when Enter is pressed
//     this.fireAncestors('$navigate', 'videoplayer');
//   }

//   _handleKey(event) {
//     if (event.keyCode === 37) {
//       // Left key pressed
//       this.fireAncestors('$focusPrev');
//     } else if (event.keyCode === 39) {
//       // Right key pressed
//       this.fireAncestors('$focusNext');
//     }
//   }
  
  

//   _unfocus() {
//     this.patch({
//       Label: {
//         text: {
//           fontSize: 40,
//         },
//       },
//     });
//   }
// }




import { Lightning } from "@lightningjs/sdk";

export class MyButton extends Lightning.Component {
  static _template() {
    return {
      // Add a colored rectangle as the background of the button
      Background: {
        w: 250,
        h: 100,
        rect: true,
        radius: 10,
        color: 0xffc0c0c0, //0xff007aff, // Blue color
      },

      Label: {
        x: 80,
        y: 20,
        text: {
          text: "Play",
          fontSize: 28,
          textColor: 0xff000000, //0xffffffff, // White color
        },
      },
    };
  }
  _handleEnter() {
    this.signal("onClick");
  }

  _focus() {
    /* this.patch({
      Label: {
        text: {
          fontSize: 50,
        },
      },
    }); */
    console.log("button focus");
    this.patch({
      smooth: { color: 0xff007aff },
      Label: {
        smooth: { color: 0xffffffff },
        text: { fontSize: 50 },
      },
    });
  }

  _unfocus() {
    /* this.patch({
      Label: {
        text: {
          fontSize: 40,
        },
      },
    }); */
    this.patch({
      smooth: { color: 0xffffffff },
      Label: {
        smooth: { color: 0xff000000 },
        text: { fontSize: 35 },
      },
    });
  }
}