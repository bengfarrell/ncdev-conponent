(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

// Final component: is a custom element, uses HTML Imports, and supports optional Shadow DOM
var NCDevConponent = function (_HTMLElement) {
    _inherits(NCDevConponent, _HTMLElement);

    function NCDevConponent() {
        _classCallCheck(this, NCDevConponent);

        return _possibleConstructorReturn(this, (NCDevConponent.__proto__ || Object.getPrototypeOf(NCDevConponent)).apply(this, arguments));
    }

    _createClass(NCDevConponent, [{
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
            this.style.backgroundColor = this._bgcolors[parseInt(this._bgcolors.length * Math.random())];
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
            this.root = this.createShadowRoot();
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
                this.style.backgroundImage = 'url("potatos.png")';
            }

            // my custom hook to wire up event listeners like click
            this.addEventListeners();
        }

        // Fires when an instance was inserted into the document.

    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {}
    }]);

    return NCDevConponent;
}(HTMLElement);

exports.default = NCDevConponent;

NCDevConponent.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('ncdev-conponent', NCDevConponent);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbmNkZXYtY29ucG9uZW50LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0ksQUFDcUI7Ozs7Ozs7Ozs7YUFDakI7Ozs7O3dDQUdnQixBQUNaO0FBS0E7Ozs7O2lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUVqQjs7QUFLQTs7Ozs7aUJBQUEsQUFBSyxXQUFMLEFBQWdCLEFBRWhCOztBQUtBOzs7OztpQkFBQSxBQUFLLFlBQVksQ0FBQSxBQUFFLFNBQUYsQUFBVyxPQUFYLEFBQWtCLFNBQWxCLEFBQTJCLFFBQTNCLEFBQW1DLFVBQXBELEFBQWlCLEFBQTZDLEFBRTlEOztBQUtBOzs7OztpQkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNmO0FBRUQ7Ozs7Ozs7O2tDQUdVLEFBQ047aUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQWtCLEtBQUEsQUFBSyxVQUFXLFNBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxTQUFTLEtBQTlFLEFBQTZCLEFBQWdCLEFBQWlDLEFBQUssQUFDdEY7QUFFRDs7Ozs7Ozs7NENBR29CO3lCQUNoQjs7aUJBQUEsQUFBSyxLQUFMLEFBQVUsT0FBVixBQUFpQixpQkFBakIsQUFBa0MsU0FBUyxpQkFBQTt1QkFBUyxPQUFBLEFBQUssUUFBZCxBQUFTLEFBQWE7QUFBakUsQUFDSDtBQUdEOzs7Ozs7OzswQ0FHa0IsQUFDZDtnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLFlBQVksQUFDOUI7cUJBQUEsQUFBSyxXQUFXLEtBQUEsQUFBSyxhQUFyQixBQUFnQixBQUFrQixBQUNyQztBQUVEOztnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLGFBQWEsQUFDL0I7cUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0o7QUFFRDs7Ozs7OzBDQUNrQixBQUNkO2lCQUFBLEFBQUssT0FBTyxLQUFaLEFBQVksQUFBSyxBQUNqQjtnQkFBSSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBMUIsQUFBZSxBQUF5QixBQUN4QztnQkFBSSxRQUFRLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQTdCLEFBQVksQUFBMkIsQUFDdkM7aUJBQUEsQUFBSyxLQUFMLEFBQVUsWUFBVixBQUFzQixBQUV0Qjs7QUFDQTtpQkFBQSxBQUFLLEFBRUw7O0FBQ0E7aUJBQUEsQUFBSyxBQUVMOztpQkFBQSxBQUFLLEtBQUwsQUFBVSxTQUFTLEtBQUEsQUFBSyxLQUFMLEFBQVUsY0FBN0IsQUFBbUIsQUFBd0IsQUFDM0M7aUJBQUEsQUFBSyxLQUFMLEFBQVUsZ0JBQWdCLEtBQUEsQUFBSyxLQUFMLEFBQVUsY0FBcEMsQUFBMEIsQUFBd0IsQUFDbEQ7aUJBQUEsQUFBSyxLQUFMLEFBQVUsY0FBVixBQUF3QixZQUFZLEtBQUEsQUFBSyxXQUF6QyxBQUFvRCxBQUVwRDs7Z0JBQUksS0FBSixBQUFTLFdBQVcsQUFDaEI7cUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsQUFDaEM7QUFFRDs7QUFDQTtpQkFBQSxBQUFLLEFBQ1I7QUFFRDs7Ozs7OzJDQUNtQixBQUFFOzs7O0UsQUF4Rm1COztrQixBQUF2Qjs7QUEyRnJCLGVBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsQ0FBQyxTQUFBLEFBQVMsa0JBQWtCLFNBQTVCLEFBQXFDLGVBQXRFLEFBQXFGO0FBQ3JGLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixtQkFBekIsQUFBNEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gRmluYWwgY29tcG9uZW50OiBpcyBhIGN1c3RvbSBlbGVtZW50LCB1c2VzIEhUTUwgSW1wb3J0cywgYW5kIHN1cHBvcnRzIG9wdGlvbmFsIFNoYWRvdyBET01cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5DRGV2Q29ucG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIHNldCBpbml0aWFsIGNsYXNzIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogaXMgY29tcG9uZW50IGJhY2tncm91bmQgYSBwb3RhdG8/XG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcG90YXRvZnkgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogY29tcG9uZW50IG1lc3NhZ2VcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSAnfm1lc3NhZ2Ugbm90IHNldH4nO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBiYWNrZ3JvdW5kIGNvbG9yc1xuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iZ2NvbG9ycyA9IFsgJ2JsYWNrJywgJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3B1cnBsZScsICdvbGl2ZScgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZG9tIGVsZW1lbnRzIHdlIHdhbnQgdG8gcmVmZXJlbmNlXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RvbSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uIGJ1dHRvbiBjbGlja1xuICAgICAqL1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fYmdjb2xvcnNbIHBhcnNlSW50KHRoaXMuX2JnY29sb3JzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3VzdG9tIGZ1bmN0aW9uIHRvIGFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fZG9tLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogcGFyc2UgYXR0cmlidXRlcyBvbiBlbGVtZW50XG4gICAgICovXG4gICAgcGFyc2VBdHRyaWJ1dGVzKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ21lc3NhZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdtZXNzYWdlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3BvdGF0b2Z5JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvdGF0b2Z5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gYW4gaW5zdGFuY2Ugb2YgdGhlIGVsZW1lbnQgaXMgY3JlYXRlZC5cbiAgICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm93bmVyLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHZhciBjbG9uZSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAgIC8vIG15IGN1c3RvbSwgY29uc3RydWN0b3Jpc2ggZnVuY3Rpb24gLSBJIGxpa2UgdG8gbGlzdCBwcm9wZXJ0aWVzIGhlcmUgZm9yIGNsYXNzIHJlYWRhYmlsaXR5XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuXG4gICAgICAgIC8vIG15IGN1c3RvbSBob29rIHRvIHByb2Nlc3MgYW55IGF0dHJpYnV0ZXMgYW5kIG5vdCBjbHV0dGVyIHRoaXMgc3BhY2VcbiAgICAgICAgdGhpcy5wYXJzZUF0dHJpYnV0ZXMoKTtcblxuICAgICAgICB0aGlzLl9kb20uYnV0dG9uID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1jaGFuZ2UtYnRuJyk7XG4gICAgICAgIHRoaXMuX2RvbS5jdXN0b21NZXNzYWdlID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tbWVzc2FnZScpO1xuICAgICAgICB0aGlzLl9kb20uY3VzdG9tTWVzc2FnZS5pbm5lckhUTUwgPSB0aGlzLl9tZXNzYWdlICsgJyA8YnIgLz4nO1xuXG4gICAgICAgIGlmICh0aGlzLl9wb3RhdG9meSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwicG90YXRvcy5wbmdcIiknO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbXkgY3VzdG9tIGhvb2sgdG8gd2lyZSB1cCBldmVudCBsaXN0ZW5lcnMgbGlrZSBjbGlja1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLy8gRmlyZXMgd2hlbiBhbiBpbnN0YW5jZSB3YXMgaW5zZXJ0ZWQgaW50byB0aGUgZG9jdW1lbnQuXG4gICAgYXR0YWNoZWRDYWxsYmFjaygpIHt9XG59XG5cbk5DRGV2Q29ucG9uZW50LnByb3RvdHlwZS5vd25lciA9IChkb2N1bWVudC5fY3VycmVudFNjcmlwdCB8fCBkb2N1bWVudC5jdXJyZW50U2NyaXB0KS5vd25lckRvY3VtZW50O1xuZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCduY2Rldi1jb25wb25lbnQnLCBOQ0RldkNvbnBvbmVudCk7Il19
