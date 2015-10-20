# Color.js

A simple color converter in JavaScript.


## Quick Start

Download the latest version:
[https://raw.githubusercontent.com/aioutecism/Color/master/build/color.min.js](https://raw.githubusercontent.com/aioutecism/Color/master/build/color.min.js)

Add it to your html.

```html
<script type="text/javascript" src="path/to/color.min.js"></script>
```

Use in your js.

```js
Color.hex2RGB('#0FAAFF'); // rgba(15, 170, 255, 1)
Color.hex2RGB('#0FAAFF80'); // rgba(15, 170, 255, 0.5)
Color.hex2RGB('#0FAAFF', '[$r, $g, $b]'); // [15, 170, 255]
Color.hex2RGB('#0FAAFF80', '[$r, $g, $b, $a]'); // [15, 170, 255, 0.5]

Color.rgb2Hex('rgb(15, 170, 255)'); // #0FAAFF
Color.rgb2Hex('rgba(15, 170, 255, 0.5)', '#$RR$GG$BB$AA'); // #0FAAFF80
Color.rgb2Hex([15, 170, 255]); // #0FAAFF
Color.rgb2Hex([15, 170, 255, 0.5], '#$RR$GG$BB$AA'); // #0FAAFF80
```


## Docs

### `hex2RGB(color[, format])`

*`String`*

Convert color of Hex to RGB.

#### color

*Required, `String`*

Hex color string.

* 6 digits for regular Hex color.
* 8 digits for Hex color with alpha.

`#` can be omited.

#### format

*Optional, `String`, Default: `rgba($r, $g, $b, $a)`*

Format of the return value.
Avaliable keys are:

* `$r` or `$R`: Red in number range 0 ~ 255.
* `$g` or `$G`: Green in number range 0 ~ 255.
* `$b` or `$B`: Blue in number range 0 ~ 255.

### `rgb2Hex(color[, format])`

*`String`*

Convert color of RGB to Hex.

#### color

*Required, `String` or `Array`*

RGB color string or array.
Avaliable formats are:

* `rgb(15, 170, 255)`
* `rgba(15, 170, 255, 0.5)`
* `[15, 170, 255]`
* `[15, 170, 255, 0.5]`

#### format

*Optional, `String`, Default: `#$RR$GG$BB`*

Format of the return value.
Avaliable keys are:

* `$RR`: Upper-case red value.
* `$rr`: Lower-case red value.
* `$GG`: Upper-case green value.
* `$gg`: Lower-case green value.
* `$BB`: Upper-case blue value.
* `$bb`: Lower-case blue value.
* `$AA`: Upper-case alpha value.
* `$aa`: Lower-case alpha value.
