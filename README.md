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
var colorHex  = new Color('#0FAAFF');
var colorHexA = new Color('#0FAAFF80');
var colorRGB  = new Color('rgb(15, 170, 255)');
var colorRGBA = new Color('rgba(15, 170, 255, 0.5)');

colorHex.toRGB(); // rgb(15, 170, 255)
colorHexA.toRGBA(); // rgba(15, 170, 255, 0.502)

colorRGB.toHex(); // #0FAAFF
colorRGBA.toHexA(); // #0FAAFF80

colorRGBA.toFormat('[$r, $g, $b, $a]'); // [15, 170, 255, 0.5]
```


## Docs

### `new Color(color)`

*`Color`*

Create a `Color` object from `color`.

#### color

*Required, `String`*

Color string in these formats:

* 6 digits Hex color like `#0FAAFF`.
* 8 digits Hex color with alpha like `#0FAAFF80`.
* CSS RGB color like `rgb(15, 170, 255)`.
* CSS RGBA color like `rgba(15, 170, 255, 0.5)`.

### `colorObject.toHex()`

*`String`*

Get 6 digits Hex color like `#0FAAFF`.

### `colorObject.toHexA()`

*`String`*

Get 8 digits Hex color with alpha like `#0FAAFF80`.

### `colorObject.toRGB()`

*`String`*

Get CSS RGB color like `rgb(15, 170, 255)`.

### `colorObject.toRGBA()`

*`String`*

Get CSS RGBA color like `rgba(15, 170, 255, 0.5)`.

### `colorObject.toFormat(format)`

*`String`*

Get custom formated color string.

#### format

*Required, `String`*

Format of the return value.
Avaliable keys are:

* `$r` or `$R`: Red in number range 0 ~ 255.
* `$g` or `$G`: Green in number range 0 ~ 255.
* `$b` or `$B`: Blue in number range 0 ~ 255.
* `$a` or `$A`: Alpha in number range 0 ~ 1.
* `$0xR`: Upper-case red in hex.
* `$0xr`: Lower-case red in hex.
* `$0xG`: Upper-case green in hex.
* `$0xg`: Lower-case green in hex.
* `$0xB`: Upper-case blue in hex.
* `$0xb`: Lower-case blue in hex.
* `$0xA`: Upper-case alpha in hex.
* `$0xa`: Lower-case alpha in hex.
