import NCDevConponent from './ncdev-conponent.es6';

export default class NCDevConponentExtended extends NCDevConponent {
    /**
     * on button click
     */
    onClick() {
        super.onClick();
        alert('click');
    }
}

NCDevConponentExtended.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('ncdev-conponent-extended', NCDevConponentExtended);