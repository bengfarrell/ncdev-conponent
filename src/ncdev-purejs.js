(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// First stab at a component. Not using HTML Imports yet, so check out the ugly element creation
// and pure JS style assignments

var NCDevPureJS = function (_HTMLElement) {
    _inherits(NCDevPureJS, _HTMLElement);

    function NCDevPureJS() {
        _classCallCheck(this, NCDevPureJS);

        var _this = _possibleConstructorReturn(this, (NCDevPureJS.__proto__ || Object.getPrototypeOf(NCDevPureJS)).call(this));

        console.log('This doesnt actually get called');
        return _this;
    }

    /**
     * set initial class properties
     */

    _createClass(NCDevPureJS, [{
        key: 'setProperties',
        value: function setProperties() {
            /**
             * is component background a potato?
             * @type {boolean}
             * @private
             */
            this._potatofy = false;

            /**
             * component message
             * @type {string}
             * @private
             */
            this._message = '~message not set~';

            /**
             * background colors
             * @type {string[]}
             * @private
             */
            this._bgcolors = ['black', 'red', 'green', 'blue', 'purple', 'olive'];

            /**
             * dom elements we want to reference
             * @type {{}}
             * @private
             */
            this._dom = {};
        }

        /**
         * on button click
         */

    }, {
        key: 'onClick',
        value: function onClick() {
            this.root.style.backgroundColor = this._bgcolors[parseInt(this._bgcolors.length * Math.random())];
        }

        /**
         * custom function to add event listeners
         */

    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this2 = this;

            this._dom.button.addEventListener('click', function (event) {
                return _this2.onClick(event);
            });
        }

        /**
         * parse attributes on element
         */

    }, {
        key: 'parseAttributes',
        value: function parseAttributes() {
            if (this.hasAttribute('message')) {
                this._message = this.getAttribute('message');
            }

            if (this.hasAttribute('potatofy')) {
                this._potatofy = true;
            }
        }

        // Fires when an instance of the element is created.

    }, {
        key: 'createdCallback',
        value: function createdCallback() {
            this.root = this;

            // my custom, constructorish function - I like to list properties here for class readability
            this.setProperties();

            // my custom hook to process any attributes and not clutter this space
            this.parseAttributes();

            this._dom.button = document.createElement('BUTTON');
            this._dom.button.innerText = 'change background color';
            this._dom.button.style.fontSize = 'larger';
            this._dom.button.style.padding = '10px';

            this._dom.message = document.createElement('DIV');
            this._dom.message.innerHTML = '<p>Hi from a custom component! I have a message for you: </p><p>' + this._message + ' <br /></p>';
            this._dom.message.style.fontSize = 'larger';
            this._dom.message.style.fontWeight = 'bolder';
            this._dom.message.style.color = 'white';

            this.root.appendChild(this._dom.message);
            this.root.appendChild(this._dom.button);

            this.root.style.backgroundColor = this._bgcolors[0];
            this.root.style.display = 'inline-block';
            this.root.style.padding = '20px';

            if (this._potatofy) {
                this.root.style.backgroundImage = 'url("potatos.png")';
            }

            // my custom hook to wire up event listeners like click
            this.addEventListeners();
        }

        // Fires when an instance was inserted into the document.

    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {}
    }]);

    return NCDevPureJS;
}(HTMLElement);

document.registerElement('ncdev-purejs-component', NCDevPureJS);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbmNkZXYtcHVyZWpzLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7SSxBQUVNOzJCQUNGOzsyQkFBYzs4QkFBQTs7d0hBRVY7O2dCQUFBLEFBQVEsSUFGRSxBQUVWLEFBQVk7ZUFDZjtBQUVEOzs7Ozs7Ozt3Q0FHZ0IsQUFDWjtBQUtBOzs7OztpQkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFFakI7O0FBS0E7Ozs7O2lCQUFBLEFBQUssV0FBTCxBQUFnQixBQUVoQjs7QUFLQTs7Ozs7aUJBQUEsQUFBSyxZQUFZLENBQUEsQUFBRSxTQUFGLEFBQVcsT0FBWCxBQUFrQixTQUFsQixBQUEyQixRQUEzQixBQUFtQyxVQUFwRCxBQUFpQixBQUE2QyxBQUU5RDs7QUFLQTs7Ozs7aUJBQUEsQUFBSyxPQUFMLEFBQVksQUFDZjtBQUVEOzs7Ozs7OztrQ0FHVSxBQUNOO2lCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0Isa0JBQWtCLEtBQUEsQUFBSyxVQUFXLFNBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxTQUFTLEtBQW5GLEFBQWtDLEFBQWdCLEFBQWlDLEFBQUssQUFDM0Y7QUFFRDs7Ozs7Ozs7NENBR29CO3lCQUNoQjs7aUJBQUEsQUFBSyxLQUFMLEFBQVUsT0FBVixBQUFpQixpQkFBakIsQUFBa0MsU0FBUyxpQkFBQTt1QkFBUyxPQUFBLEFBQUssUUFBZCxBQUFTLEFBQWE7QUFBakUsQUFDSDtBQUdEOzs7Ozs7OzswQ0FHa0IsQUFDZDtnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLFlBQVksQUFDOUI7cUJBQUEsQUFBSyxXQUFXLEtBQUEsQUFBSyxhQUFyQixBQUFnQixBQUFrQixBQUNyQztBQUVEOztnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLGFBQWEsQUFDL0I7cUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0o7QUFFRDs7Ozs7OzBDQUNrQixBQUNkO2lCQUFBLEFBQUssT0FBTCxBQUFZLEFBRVo7O0FBQ0E7aUJBQUEsQUFBSyxBQUVMOztBQUNBO2lCQUFBLEFBQUssQUFFTDs7aUJBQUEsQUFBSyxLQUFMLEFBQVUsU0FBUyxTQUFBLEFBQVMsY0FBNUIsQUFBbUIsQUFBdUIsQUFDMUM7aUJBQUEsQUFBSyxLQUFMLEFBQVUsT0FBVixBQUFpQixZQUFqQixBQUE2QixBQUM3QjtpQkFBQSxBQUFLLEtBQUwsQUFBVSxPQUFWLEFBQWlCLE1BQWpCLEFBQXVCLFdBQXZCLEFBQWtDLEFBQ2xDO2lCQUFBLEFBQUssS0FBTCxBQUFVLE9BQVYsQUFBaUIsTUFBakIsQUFBdUIsVUFBdkIsQUFBaUMsQUFHakM7O2lCQUFBLEFBQUssS0FBTCxBQUFVLFVBQVUsU0FBQSxBQUFTLGNBQTdCLEFBQW9CLEFBQXVCLEFBQzNDO2lCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsWUFBWSxxRUFBcUUsS0FBckUsQUFBMEUsV0FBeEcsQUFBbUgsQUFDbkg7aUJBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixNQUFsQixBQUF3QixXQUF4QixBQUFtQyxBQUNuQztpQkFBQSxBQUFLLEtBQUwsQUFBVSxRQUFWLEFBQWtCLE1BQWxCLEFBQXdCLGFBQXhCLEFBQXFDLEFBQ3JDO2lCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsTUFBbEIsQUFBd0IsUUFBeEIsQUFBZ0MsQUFFaEM7O2lCQUFBLEFBQUssS0FBTCxBQUFVLFlBQVksS0FBQSxBQUFLLEtBQTNCLEFBQWdDLEFBQ2hDO2lCQUFBLEFBQUssS0FBTCxBQUFVLFlBQVksS0FBQSxBQUFLLEtBQTNCLEFBQWdDLEFBRWhDOztpQkFBQSxBQUFLLEtBQUwsQUFBVSxNQUFWLEFBQWdCLGtCQUFrQixLQUFBLEFBQUssVUFBdkMsQUFBa0MsQUFBZSxBQUNqRDtpQkFBQSxBQUFLLEtBQUwsQUFBVSxNQUFWLEFBQWdCLFVBQWhCLEFBQTBCLEFBQzFCO2lCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0IsVUFBaEIsQUFBMEIsQUFFMUI7O2dCQUFJLEtBQUosQUFBUyxXQUFXLEFBQ2hCO3FCQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0Isa0JBQWhCLEFBQWtDLEFBQ3JDO0FBRUQ7O0FBQ0E7aUJBQUEsQUFBSyxBQUNSO0FBRUQ7Ozs7OzsyQ0FDbUIsQUFBRTs7OztFLEFBekdDOztBQTRHMUIsU0FBQSxBQUFTLGdCQUFULEFBQXlCLDBCQUF6QixBQUFtRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBGaXJzdCBzdGFiIGF0IGEgY29tcG9uZW50LiBOb3QgdXNpbmcgSFRNTCBJbXBvcnRzIHlldCwgc28gY2hlY2sgb3V0IHRoZSB1Z2x5IGVsZW1lbnQgY3JlYXRpb25cbi8vIGFuZCBwdXJlIEpTIHN0eWxlIGFzc2lnbm1lbnRzXG5cbmNsYXNzIE5DRGV2UHVyZUpTIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkb2VzbnQgYWN0dWFsbHkgZ2V0IGNhbGxlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNldCBpbml0aWFsIGNsYXNzIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogaXMgY29tcG9uZW50IGJhY2tncm91bmQgYSBwb3RhdG8/XG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcG90YXRvZnkgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogY29tcG9uZW50IG1lc3NhZ2VcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSAnfm1lc3NhZ2Ugbm90IHNldH4nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiYWNrZ3JvdW5kIGNvbG9yc1xuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iZ2NvbG9ycyA9IFsgJ2JsYWNrJywgJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3B1cnBsZScsICdvbGl2ZScgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZG9tIGVsZW1lbnRzIHdlIHdhbnQgdG8gcmVmZXJlbmNlXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RvbSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uIGJ1dHRvbiBjbGlja1xuICAgICAqL1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9iZ2NvbG9yc1sgcGFyc2VJbnQodGhpcy5fYmdjb2xvcnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSkgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjdXN0b20gZnVuY3Rpb24gdG8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9kb20uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBwYXJzZSBhdHRyaWJ1dGVzIG9uIGVsZW1lbnRcbiAgICAgKi9cbiAgICBwYXJzZUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnbWVzc2FnZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ21lc3NhZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgncG90YXRvZnknKSkge1xuICAgICAgICAgICAgdGhpcy5fcG90YXRvZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbiBhbiBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkLlxuICAgIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcztcblxuICAgICAgICAvLyBteSBjdXN0b20sIGNvbnN0cnVjdG9yaXNoIGZ1bmN0aW9uIC0gSSBsaWtlIHRvIGxpc3QgcHJvcGVydGllcyBoZXJlIGZvciBjbGFzcyByZWFkYWJpbGl0eVxuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcblxuICAgICAgICAvLyBteSBjdXN0b20gaG9vayB0byBwcm9jZXNzIGFueSBhdHRyaWJ1dGVzIGFuZCBub3QgY2x1dHRlciB0aGlzIHNwYWNlXG4gICAgICAgIHRoaXMucGFyc2VBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgdGhpcy5fZG9tLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICB0aGlzLl9kb20uYnV0dG9uLmlubmVyVGV4dCA9ICdjaGFuZ2UgYmFja2dyb3VuZCBjb2xvcic7XG4gICAgICAgIHRoaXMuX2RvbS5idXR0b24uc3R5bGUuZm9udFNpemUgPSAnbGFyZ2VyJztcbiAgICAgICAgdGhpcy5fZG9tLmJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xuXG5cbiAgICAgICAgdGhpcy5fZG9tLm1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5fZG9tLm1lc3NhZ2UuaW5uZXJIVE1MID0gJzxwPkhpIGZyb20gYSBjdXN0b20gY29tcG9uZW50ISBJIGhhdmUgYSBtZXNzYWdlIGZvciB5b3U6IDwvcD48cD4nICsgdGhpcy5fbWVzc2FnZSArICcgPGJyIC8+PC9wPic7XG4gICAgICAgIHRoaXMuX2RvbS5tZXNzYWdlLnN0eWxlLmZvbnRTaXplID0gJ2xhcmdlcic7XG4gICAgICAgIHRoaXMuX2RvbS5tZXNzYWdlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZGVyJztcbiAgICAgICAgdGhpcy5fZG9tLm1lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLl9kb20ubWVzc2FnZSk7XG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLl9kb20uYnV0dG9uKTtcblxuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fYmdjb2xvcnNbMF07XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xuXG4gICAgICAgIGlmICh0aGlzLl9wb3RhdG9meSkge1xuICAgICAgICAgICAgdGhpcy5yb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJwb3RhdG9zLnBuZ1wiKSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBteSBjdXN0b20gaG9vayB0byB3aXJlIHVwIGV2ZW50IGxpc3RlbmVycyBsaWtlIGNsaWNrXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIGFuIGluc3RhbmNlIHdhcyBpbnNlcnRlZCBpbnRvIHRoZSBkb2N1bWVudC5cbiAgICBhdHRhY2hlZENhbGxiYWNrKCkge31cbn1cblxuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCduY2Rldi1wdXJlanMtY29tcG9uZW50JywgTkNEZXZQdXJlSlMpOyJdfQ==
