const materialize = require('materialize-css');

class Modal {
    constructor(elem, closeCallback) {
        this.instance = materialize.Modal.init(elem, {
            onCloseEnd : () => {
                closeCallback();
            }
        })[0];
    }

    open() {
        this.instance.open();
    }
}

module.exports = Modal;

