# PER SIMO (**DRAFT**)

## About

Paint on HTML canvas with mouse. Check demo at [https://davidetriso.github.io/persimo/](https://davidetriso.github.io/persimo/)
**Plugin is under development, the API may and will change rapidly. Do not use in production!**

## Dependencies

**No dependencies**

## Settings / Options

Name | Default | Type | Description | Required or Optional
-----|---------|------|-------------|--------------------
canvas | undefined | DOM element | The canvas element | **Required**
width | undefined | int > 0 | The width of the canvas (same as attribute width, not the width on screen) | Optional
height | undefined | int > 0 | The height of the canvas | (same as attribute height, not the height on screen) | Optional
color | '#000' | string | The stroke color | Optional
size | 10 | int > 0 | The stroke size | Optional

## Installation

Download the package from **GitHub** and get the compiled files from the `dist` folder.

The plugin is also available on **npm**:
```
npm install persimo
```

## Usage

1. Include the JS script **perSimo.js** - or the minified production script **perSimo.min.js** -  in the head or the body of your HTML file.
2. Initialise the widget within an inline script tag, or in an external JS file.

### HTML

Use following HTML markup for canvas:

```html
<canvas with="600" height="400"></canvas>
```
**NOTE:** the attributes width and height are mandatory on canvas element.

### JS: Initialise

Initialise the plugin as follows:

```javascript

```

## Methods

The plugin supports following methods: `setColor`, `setSize`.

### setColor:

```javascript
```

### setSize:

```javascript
```

## LICENSE

This project is licensed under the terms of the **MIT license**.

See [LICENSE.md](LICENSE.md) for detailed informations.
