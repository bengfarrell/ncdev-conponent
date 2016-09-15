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

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _ncdevConponent = require('./ncdev-conponent.es6');

var _ncdevConponent2 = _interopRequireDefault(_ncdevConponent);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

var NCDevConponentExtended = function (_NCDevConponent) {
    _inherits(NCDevConponentExtended, _NCDevConponent);

    function NCDevConponentExtended() {
        _classCallCheck(this, NCDevConponentExtended);

        return _possibleConstructorReturn(this, (NCDevConponentExtended.__proto__ || Object.getPrototypeOf(NCDevConponentExtended)).apply(this, arguments));
    }

    _createClass(NCDevConponentExtended, [{
        key: 'onClick',

        /**
         * on button click
         */
        value: function onClick() {
            _get(NCDevConponentExtended.prototype.__proto__ || Object.getPrototypeOf(NCDevConponentExtended.prototype), 'onClick', this).call(this);
            alert('click');
        }
    }]);

    return NCDevConponentExtended;
}(_ncdevConponent2.default);

exports.default = NCDevConponentExtended;

NCDevConponentExtended.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('ncdev-conponent-extended', NCDevConponentExtended);

},{"./ncdev-conponent.es6":2}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbmNkZXYtY29ucG9uZW50LWV4dGVuZGVkLmVzNiIsInNyYy9uY2Rldi1jb25wb25lbnQuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFBRXFCOzs7Ozs7Ozs7O2FBQ2pCOzs7OztrQ0FHVSxBQUNOOzhJQUNBO2tCQUFBLEFBQU0sQUFDVDs7Ozs7OztrQixBQVBnQjs7QUFVckIsdUJBQUEsQUFBdUIsVUFBdkIsQUFBaUMsUUFBUSxDQUFDLFNBQUEsQUFBUyxrQkFBa0IsU0FBNUIsQUFBcUMsZUFBOUUsQUFBNkY7QUFDN0YsU0FBQSxBQUFTLGdCQUFULEFBQXlCLDRCQUF6QixBQUFxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnJEO0ksQUFDcUI7Ozs7Ozs7Ozs7YUFDakI7Ozs7O3dDQUdnQixBQUNaO0FBS0E7Ozs7O2lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUVqQjs7QUFLQTs7Ozs7aUJBQUEsQUFBSyxXQUFMLEFBQWdCLEFBRWhCOztBQUtBOzs7OztpQkFBQSxBQUFLLFlBQVksQ0FBQSxBQUFFLFNBQUYsQUFBVyxPQUFYLEFBQWtCLFNBQWxCLEFBQTJCLFFBQTNCLEFBQW1DLFVBQXBELEFBQWlCLEFBQTZDLEFBRTlEOztBQUtBOzs7OztpQkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNmO0FBRUQ7Ozs7Ozs7O2tDQUdVLEFBQ047aUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQWtCLEtBQUEsQUFBSyxVQUFXLFNBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxTQUFTLEtBQTlFLEFBQTZCLEFBQWdCLEFBQWlDLEFBQUssQUFDdEY7QUFFRDs7Ozs7Ozs7NENBR29CO3lCQUNoQjs7aUJBQUEsQUFBSyxLQUFMLEFBQVUsT0FBVixBQUFpQixpQkFBakIsQUFBa0MsU0FBUyxpQkFBQTt1QkFBUyxPQUFBLEFBQUssUUFBZCxBQUFTLEFBQWE7QUFBakUsQUFDSDtBQUdEOzs7Ozs7OzswQ0FHa0IsQUFDZDtnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLFlBQVksQUFDOUI7cUJBQUEsQUFBSyxXQUFXLEtBQUEsQUFBSyxhQUFyQixBQUFnQixBQUFrQixBQUNyQztBQUVEOztnQkFBSSxLQUFBLEFBQUssYUFBVCxBQUFJLEFBQWtCLGFBQWEsQUFDL0I7cUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0o7QUFFRDs7Ozs7OzBDQUNrQixBQUNkO2lCQUFBLEFBQUssT0FBTyxLQUFaLEFBQVksQUFBSyxBQUNqQjtnQkFBSSxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBMUIsQUFBZSxBQUF5QixBQUN4QztnQkFBSSxRQUFRLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQTdCLEFBQVksQUFBMkIsQUFDdkM7aUJBQUEsQUFBSyxLQUFMLEFBQVUsWUFBVixBQUFzQixBQUV0Qjs7QUFDQTtpQkFBQSxBQUFLLEFBRUw7O0FBQ0E7aUJBQUEsQUFBSyxBQUVMOztpQkFBQSxBQUFLLEtBQUwsQUFBVSxTQUFTLEtBQUEsQUFBSyxLQUFMLEFBQVUsY0FBN0IsQUFBbUIsQUFBd0IsQUFDM0M7aUJBQUEsQUFBSyxLQUFMLEFBQVUsZ0JBQWdCLEtBQUEsQUFBSyxLQUFMLEFBQVUsY0FBcEMsQUFBMEIsQUFBd0IsQUFDbEQ7aUJBQUEsQUFBSyxLQUFMLEFBQVUsY0FBVixBQUF3QixZQUFZLEtBQUEsQUFBSyxXQUF6QyxBQUFvRCxBQUVwRDs7Z0JBQUksS0FBSixBQUFTLFdBQVcsQUFDaEI7cUJBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQVgsQUFBNkIsQUFDaEM7QUFFRDs7QUFDQTtpQkFBQSxBQUFLLEFBQ1I7QUFFRDs7Ozs7OzJDQUNtQixBQUFFOzs7O0UsQUF4Rm1COztrQixBQUF2Qjs7QUEyRnJCLGVBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsQ0FBQyxTQUFBLEFBQVMsa0JBQWtCLFNBQTVCLEFBQXFDLGVBQXRFLEFBQXFGO0FBQ3JGLFNBQUEsQUFBUyxnQkFBVCxBQUF5QixtQkFBekIsQUFBNEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE5DRGV2Q29ucG9uZW50IGZyb20gJy4vbmNkZXYtY29ucG9uZW50LmVzNic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5DRGV2Q29ucG9uZW50RXh0ZW5kZWQgZXh0ZW5kcyBOQ0RldkNvbnBvbmVudCB7XG4gICAgLyoqXG4gICAgICogb24gYnV0dG9uIGNsaWNrXG4gICAgICovXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgc3VwZXIub25DbGljaygpO1xuICAgICAgICBhbGVydCgnY2xpY2snKTtcbiAgICB9XG59XG5cbk5DRGV2Q29ucG9uZW50RXh0ZW5kZWQucHJvdG90eXBlLm93bmVyID0gKGRvY3VtZW50Ll9jdXJyZW50U2NyaXB0IHx8IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpLm93bmVyRG9jdW1lbnQ7XG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoJ25jZGV2LWNvbnBvbmVudC1leHRlbmRlZCcsIE5DRGV2Q29ucG9uZW50RXh0ZW5kZWQpOyIsIi8vIEZpbmFsIGNvbXBvbmVudDogaXMgYSBjdXN0b20gZWxlbWVudCwgdXNlcyBIVE1MIEltcG9ydHMsIGFuZCBzdXBwb3J0cyBvcHRpb25hbCBTaGFkb3cgRE9NXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOQ0RldkNvbnBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBzZXQgaW5pdGlhbCBjbGFzcyBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlzIGNvbXBvbmVudCBiYWNrZ3JvdW5kIGEgcG90YXRvP1xuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3BvdGF0b2Z5ID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNvbXBvbmVudCBtZXNzYWdlXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tZXNzYWdlID0gJ35tZXNzYWdlIG5vdCBzZXR+JztcblxuICAgICAgICAvKipcbiAgICAgICAgICogYmFja2dyb3VuZCBjb2xvcnNcbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmdjb2xvcnMgPSBbICdibGFjaycsICdyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdwdXJwbGUnLCAnb2xpdmUnIF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRvbSBlbGVtZW50cyB3ZSB3YW50IHRvIHJlZmVyZW5jZVxuICAgICAgICAgKiBAdHlwZSB7e319XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kb20gPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBidXR0b24gY2xpY2tcbiAgICAgKi9cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2JnY29sb3JzWyBwYXJzZUludCh0aGlzLl9iZ2NvbG9ycy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKSBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGN1c3RvbSBmdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuX2RvbS5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHBhcnNlIGF0dHJpYnV0ZXMgb24gZWxlbWVudFxuICAgICAqL1xuICAgIHBhcnNlQXR0cmlidXRlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdtZXNzYWdlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnbWVzc2FnZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdwb3RhdG9meScpKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3RhdG9meSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaXJlcyB3aGVuIGFuIGluc3RhbmNlIG9mIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQuXG4gICAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5vd25lci5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpO1xuICAgICAgICB2YXIgY2xvbmUgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgICAvLyBteSBjdXN0b20sIGNvbnN0cnVjdG9yaXNoIGZ1bmN0aW9uIC0gSSBsaWtlIHRvIGxpc3QgcHJvcGVydGllcyBoZXJlIGZvciBjbGFzcyByZWFkYWJpbGl0eVxuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcblxuICAgICAgICAvLyBteSBjdXN0b20gaG9vayB0byBwcm9jZXNzIGFueSBhdHRyaWJ1dGVzIGFuZCBub3QgY2x1dHRlciB0aGlzIHNwYWNlXG4gICAgICAgIHRoaXMucGFyc2VBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgdGhpcy5fZG9tLmJ1dHRvbiA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItY2hhbmdlLWJ0bicpO1xuICAgICAgICB0aGlzLl9kb20uY3VzdG9tTWVzc2FnZSA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLW1lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5fZG9tLmN1c3RvbU1lc3NhZ2UuaW5uZXJIVE1MID0gdGhpcy5fbWVzc2FnZSArICcgPGJyIC8+JztcblxuICAgICAgICBpZiAodGhpcy5fcG90YXRvZnkpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcInBvdGF0b3MucG5nXCIpJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG15IGN1c3RvbSBob29rIHRvIHdpcmUgdXAgZXZlbnQgbGlzdGVuZXJzIGxpa2UgY2xpY2tcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIEZpcmVzIHdoZW4gYW4gaW5zdGFuY2Ugd2FzIGluc2VydGVkIGludG8gdGhlIGRvY3VtZW50LlxuICAgIGF0dGFjaGVkQ2FsbGJhY2soKSB7fVxufVxuXG5OQ0RldkNvbnBvbmVudC5wcm90b3R5cGUub3duZXIgPSAoZG9jdW1lbnQuX2N1cnJlbnRTY3JpcHQgfHwgZG9jdW1lbnQuY3VycmVudFNjcmlwdCkub3duZXJEb2N1bWVudDtcbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudCgnbmNkZXYtY29ucG9uZW50JywgTkNEZXZDb25wb25lbnQpOyJdfQ==
