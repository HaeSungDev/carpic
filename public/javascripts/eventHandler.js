const $ = require('jquery');
const Modal = require('./Modal');

const elem = $('.modal');
const modal = new Modal(elem);

$('#uploadBtn').on('click', () => { modal.open() });