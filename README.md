# Color.js

A simple color converter in JavaScript.

## Quick Start

Download the latest version:
[https://raw.githubusercontent.com/aioutecism/Color/master/build/color.min.js]()

Add it to your html.

```html
<script type="text/javascript" src="path/to/color.min.js"></script>
```

Use in your js.

```js
Color.hex2RGB('#0FAAFF'); // rgba(15, 170, 255, 255)
Color.hex2RGB('#0FAAFF80'); // rgba(15, 170, 255, 128)
Color.hex2RGB('#0FAAFF', '[$R, $G, $B]'); // [15, 170, 255]
Color.hex2RGB('#0FAAFF80', '[$R, $G, $B, $A]'); // [15, 170, 255, 128]

Color.rgb2Hex('rgb(15, 170, 255)'); // #0FAAFF
Color.rgb2Hex('rgba(15, 170, 255, 0.5)', '#$RR$GG$BB$AA'); // #0FAAFF80
Color.rgb2Hex([15, 170, 255]); // #0FAAFF
Color.rgb2Hex([15, 170, 255, 0.5], '#$RR$GG$BB$AA'); // #0FAAFF80
```
