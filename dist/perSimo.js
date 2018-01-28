var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
MIT License
Copyright (c) 2018 Davide Trisolini
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.PerSimo = factory();
  }
})(this, function () {
  //PRIVATE FUNCTIONS
  function getPosition(param, event) {
    var x, y;

    x = (event.pageX - param.canvas.offsetLeft) / (param.canvasScreenWidth / param.canvasWidth);
    y = (event.pageY - param.canvas.offsetTop) / (param.canvasScreenHeight / param.canvasHeight);

    return [x, y];
  };

  //CONSTRUCTOR

  function PerSimo(options) {
    var _this = this;

    this.canvas = options.canvas;
    if (this.canvas.getAttribute('width') === undefined || this.canvas.getAttribute('height') === undefined) {
      throw new Error('Attributes width and height are mandatory on canvas element!');
    }
    this.canvasWidth = options.width || parseInt(this.canvas.getAttribute('width'), 10);
    this.canvasHeight = options.height || parseInt(this.canvas.getAttribute('height'), 10);
    this.canvasScreenWidth = this.canvas.clientWidth;
    this.canvasScreenHeight = this.canvas.clientHeight;
    this.ctx = this.canvas.getContext('2d');
    this.mousedown = false;

    this.setColor(options.color = '#000');
    this.setSize(options.size = 10);

    window.addEventListener('resize', function () {
      _this.canvasScreenWidth = _this.canvas.clientWidth;
      _this.canvasScreenHeight = _this.canvas.clientHeight;
    });

    //MOUSE AND POINTERS
    this.canvas.addEventListener('mousedown', function (event) {
      _this.mousedown = true;
      var position = getPosition(_this, event);
      _this.ctx.beginPath();
      _this.ctx.moveTo(position[0], position[1]);
    });

    window.addEventListener('mouseup', function () {
      _this.mousedown = false;
    });

    this.canvas.addEventListener('mousemove', function (event) {
      if (_this.mousedown) {
        var position = getPosition(_this, event);
        _this.ctx.lineTo(position[0], position[1]);
        _this.ctx.stroke();
      }
    });

    /*
    check https://developer.mozilla.org/en-US/docs/Web/API/Touch_events for info about how to implement touch drawing
     //TOUCH DEVICES
    this.canvas.addEventListener('touchstart', (event) => {
      this.mousedown = true;
      var position = getPositionTouch(this, event);
      this.ctx.beginPath();
      this.ctx.moveTo(position[0], position[1]);
    });
     window.addEventListener('touchend', () => {
      this.mousedown = false;
    });
     this.canvas.addEventListener('touchmove', (event) => {
      if (this.mousedown) {
        var position = getPositionTouch(this, event);
        this.ctx.lineTo(position[0], position[1]);
        this.ctx.stroke();
      }
    });
    */
  };

  PerSimo.prototype.setColor = function (color) {
    this.ctx.strokeStyle = color;
  };

  PerSimo.prototype.setSize = function (size) {
    this.ctx.lineWidth = parseInt(size, 10);
  };

  return PerSimo;
});