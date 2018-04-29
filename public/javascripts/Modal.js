const materialize = require('materialize-css');

class Modal {
    constructor(elem) {
        this.instance = materialize.Modal.getInstance(elem);
    }

    open() {
        this.instance.open();
    }
}

module.exports = Modal;

