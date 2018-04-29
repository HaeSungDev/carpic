const materialize = require('materialize-css');

class Modal {
    constructor(elem) {
        this.instance = materialize.Modal.init(elem, {})[0];
    }

    open() {
        this.instance.open();
    }
}

module.exports = Modal;

