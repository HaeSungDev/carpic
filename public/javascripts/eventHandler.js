const $ = require('jquery');
const Modal = require('./Modal');

const elem = $('.modal');
const modal = new Modal(elem);

console.log(modal);
modal.open()

$('uploadBtn').on('click', () => { modal.open()});