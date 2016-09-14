// Final component: is a custom element, uses HTML Imports, and supports optional Shadow DOM
class NCDevConponent extends HTMLElement {
    /**
     * set initial class properties
     */
    setProperties() {
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
        this._bgcolors = [ 'black', 'red', 'green', 'blue', 'purple', 'olive' ];

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
    onClick() {
        this.style.backgroundColor = this._bgcolors[ parseInt(this._bgcolors.length * Math.random()) ];
    }

    /**
     * custom function to add event listeners
     */
    addEventListeners() {
        this._dom.button.addEventListener('click', event => this.onClick(event));
    }


    /**
     * parse attributes on element
     */
    parseAttributes() {
        if (this.hasAttribute('message')) {
            this._message = this.getAttribute('message');
        }

        if (this.hasAttribute('potatofy')) {
            this._potatofy = true;
        }
    }

    // Fires when an instance of the element is created.
    createdCallback() {
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
    attachedCallback() {}
}

NCDevConponent.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('ncdev-conponent', NCDevConponent);