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

// Not yet the end component - just one step further using HTML Imports
var NCDevHTMLImports = function (_HTMLElement) {
    _inherits(NCDevHTMLImports, _HTMLElement);

    function NCDevHTMLImports() {
        _classCallCheck(this, NCDevHTMLImports);

        return _possibleConstructorReturn(this, (NCDevHTMLImports.__proto__ || Object.getPrototypeOf(NCDevHTMLImports)).apply(this, arguments));
    }

    _createClass(NCDevHTMLImports, [{
        key: 'setProperties',

        /**
         * set initial class properties
         */
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
            var template = this.owner.querySelector('template');
            var clone = template.content.cloneNode(true);
            this.root.appendChild(clone);

            // my custom, constructorish function - I like to list properties here for class readability
            this.setProperties();

            // my custom hook to process any attributes and not clutter this space
            this.parseAttributes();

            this._dom.button = this.root.querySelector('.color-change-btn');
            this._dom.customMessage = this.root.querySelector('.custom-message');
            this._dom.customMessage.innerHTML = this._message + ' <br />';

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

    return NCDevHTMLImports;
}(HTMLElement);

NCDevHTMLImports.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('ncdev-htmlimports-component', NCDevHTMLImports);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbmNkZXYtaHRtbGltcG9ydHMuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtJLEFBQ007Ozs7Ozs7Ozs7YUFDRjs7Ozs7d0NBR2dCLEFBQ1o7QUFLQTs7Ozs7aUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBRWpCOztBQUtBOzs7OztpQkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFFaEI7O0FBS0E7Ozs7O2lCQUFBLEFBQUssWUFBWSxDQUFBLEFBQUUsU0FBRixBQUFXLE9BQVgsQUFBa0IsU0FBbEIsQUFBMkIsUUFBM0IsQUFBbUMsVUFBcEQsQUFBaUIsQUFBNkMsQUFFOUQ7O0FBS0E7Ozs7O2lCQUFBLEFBQUssT0FBTCxBQUFZLEFBQ2Y7QUFFRDs7Ozs7Ozs7a0NBR1UsQUFDTjtpQkFBQSxBQUFLLEtBQUwsQUFBVSxNQUFWLEFBQWdCLGtCQUFrQixLQUFBLEFBQUssVUFBVyxTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsU0FBUyxLQUFuRixBQUFrQyxBQUFnQixBQUFpQyxBQUFLLEFBQzNGO0FBRUQ7Ozs7Ozs7OzRDQUdvQjt5QkFDaEI7O2lCQUFBLEFBQUssS0FBTCxBQUFVLE9BQVYsQUFBaUIsaUJBQWpCLEFBQWtDLFNBQVMsaUJBQUE7dUJBQVMsT0FBQSxBQUFLLFFBQWQsQUFBUyxBQUFhO0FBQWpFLEFBQ0g7QUFHRDs7Ozs7Ozs7MENBR2tCLEFBQ2Q7Z0JBQUksS0FBQSxBQUFLLGFBQVQsQUFBSSxBQUFrQixZQUFZLEFBQzlCO3FCQUFBLEFBQUssV0FBVyxLQUFBLEFBQUssYUFBckIsQUFBZ0IsQUFBa0IsQUFDckM7QUFFRDs7Z0JBQUksS0FBQSxBQUFLLGFBQVQsQUFBSSxBQUFrQixhQUFhLEFBQy9CO3FCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNwQjtBQUNKO0FBRUQ7Ozs7OzswQ0FDa0IsQUFDZDtpQkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaO2dCQUFJLFdBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUExQixBQUFlLEFBQXlCLEFBQ3hDO2dCQUFJLFFBQVEsU0FBQSxBQUFTLFFBQVQsQUFBaUIsVUFBN0IsQUFBWSxBQUEyQixBQUN2QztpQkFBQSxBQUFLLEtBQUwsQUFBVSxZQUFWLEFBQXNCLEFBRXRCOztBQUNBO2lCQUFBLEFBQUssQUFFTDs7QUFDQTtpQkFBQSxBQUFLLEFBRUw7O2lCQUFBLEFBQUssS0FBTCxBQUFVLFNBQVMsS0FBQSxBQUFLLEtBQUwsQUFBVSxjQUE3QixBQUFtQixBQUF3QixBQUMzQztpQkFBQSxBQUFLLEtBQUwsQUFBVSxnQkFBZ0IsS0FBQSxBQUFLLEtBQUwsQUFBVSxjQUFwQyxBQUEwQixBQUF3QixBQUNsRDtpQkFBQSxBQUFLLEtBQUwsQUFBVSxjQUFWLEFBQXdCLFlBQVksS0FBQSxBQUFLLFdBQXpDLEFBQW9ELEFBRXBEOztnQkFBSSxLQUFKLEFBQVMsV0FBVyxBQUNoQjtxQkFBQSxBQUFLLEtBQUwsQUFBVSxNQUFWLEFBQWdCLGtCQUFoQixBQUFrQyxBQUNyQztBQUVEOztBQUNBO2lCQUFBLEFBQUssQUFDUjtBQUVEOzs7Ozs7MkNBQ21CLEFBQUU7Ozs7RSxBQXhGTTs7QUEyRi9CLGlCQUFBLEFBQWlCLFVBQWpCLEFBQTJCLFFBQVEsQ0FBQyxTQUFBLEFBQVMsa0JBQWtCLFNBQTVCLEFBQXFDLGVBQXhFLEFBQXVGO0FBQ3ZGLFNBQUEsQUFBUyxnQkFBVCxBQUF5QiwrQkFBekIsQUFBd0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gTm90IHlldCB0aGUgZW5kIGNvbXBvbmVudCAtIGp1c3Qgb25lIHN0ZXAgZnVydGhlciB1c2luZyBIVE1MIEltcG9ydHNcbmNsYXNzIE5DRGV2SFRNTEltcG9ydHMgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogc2V0IGluaXRpYWwgY2xhc3MgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHNldFByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpcyBjb21wb25lbnQgYmFja2dyb3VuZCBhIHBvdGF0bz9cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9wb3RhdG9meSA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjb21wb25lbnQgbWVzc2FnZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9ICd+bWVzc2FnZSBub3Qgc2V0fic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJhY2tncm91bmQgY29sb3JzXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JnY29sb3JzID0gWyAnYmxhY2snLCAncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAncHVycGxlJywgJ29saXZlJyBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkb20gZWxlbWVudHMgd2Ugd2FudCB0byByZWZlcmVuY2VcbiAgICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZG9tID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb24gYnV0dG9uIGNsaWNrXG4gICAgICovXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2JnY29sb3JzWyBwYXJzZUludCh0aGlzLl9iZ2NvbG9ycy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKSBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGN1c3RvbSBmdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2RvbS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHBhcnNlIGF0dHJpYnV0ZXMgb24gZWxlbWVudFxuICAgICAqL1xuICAgIHBhcnNlQXR0cmlidXRlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdtZXNzYWdlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbWVzc2FnZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdwb3RhdG9meScpKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3RhdG9meSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIGFuIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm93bmVyLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHZhciBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAgIC8vIG15IGN1c3RvbSwgY29uc3RydWN0b3Jpc2ggZnVuY3Rpb24gLSBJIGxpa2UgdG8gbGlzdCBwcm9wZXJ0aWVzIGhlcmUgZm9yIGNsYXNzIHJlYWRhYmlsaXR5XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIC8vIG15IGN1c3RvbSBob29rIHRvIHByb2Nlc3MgYW55IGF0dHJpYnV0ZXMgYW5kIG5vdCBjbHV0dGVyIHRoaXMgc3BhY2VcbiAgICAgICAgdGhpcy5wYXJzZUF0dHJpYnV0ZXMoKTtcblxuICAgICAgICB0aGlzLl9kb20uYnV0dG9uID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1jaGFuZ2UtYnRuJyk7XG4gICAgICAgIHRoaXMuX2RvbS5jdXN0b21NZXNzYWdlID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tbWVzc2FnZScpO1xuICAgICAgICB0aGlzLl9kb20uY3VzdG9tTWVzc2FnZS5pbm5lckhUTUwgPSB0aGlzLl9tZXNzYWdlICsgJyA8YnIgLz4nO1xuXG4gICAgICAgIGlmICh0aGlzLl9wb3RhdG9meSkge1xuICAgICAgICAgICAgdGhpcy5yb290LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJwb3RhdG9zLnBuZ1wiKSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBteSBjdXN0b20gaG9vayB0byB3aXJlIHVwIGV2ZW50IGxpc3RlbmVycyBsaWtlIGNsaWNrXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIGFuIGluc3RhbmNlIHdhcyBpbnNlcnRlZCBpbnRvIHRoZSBkb2N1bWVudC5cbiAgICBhdHRhY2hlZENhbGxiYWNrKCkge31cbn1cblxuTkNEZXZIVE1MSW1wb3J0cy5wcm90b3R5cGUub3duZXIgPSAoZG9jdW1lbnQuX2N1cnJlbnRTY3JpcHQgfHwgZG9jdW1lbnQuY3VycmVudFNjcmlwdCkub3duZXJEb2N1bWVudDtcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbmNkZXYtaHRtbGltcG9ydHMtY29tcG9uZW50JywgTkNEZXZIVE1MSW1wb3J0cyk7Il19
