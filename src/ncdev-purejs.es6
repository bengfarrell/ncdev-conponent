// First stab at a component. Not using HTML Imports yet, so check out the ugly element creation
// and pure JS style assignments

class NCDevPureJS extends HTMLElement {
    constructor() {
        super();
        console.log('This doesnt actually get called');
    }

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
        this.root.style.backgroundColor = this._bgcolors[ parseInt(this._bgcolors.length * Math.random()) ];
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
    attachedCallback() {}
}

document.registerElement('ncdev-purejs-component', NCDevPureJS);