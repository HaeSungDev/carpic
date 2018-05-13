const $ = require('jquery');
const loginEvent = require('./loginEvent');
const uploadEvent = require('./uploadEvent');
const pictureListEvent = require('./pictureListEvent');

$(document).ready(() => {
    loginEvent();
    pictureListEvent();
    uploadEvent();
});