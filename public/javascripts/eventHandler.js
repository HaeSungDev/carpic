const $ = require('jquery');
const uploadEvent = require('./uploadEvent');
const pictureListEvent = require('./pictureListEvent');

$(document).ready(() => {
    pictureListEvent();
    uploadEvent();
});