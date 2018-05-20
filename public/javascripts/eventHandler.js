const $ = require('jquery');
const loginHandler = require('./loginHandler');
const uploadEvent = require('./uploadEvent');
const pictureListEvent = require('./pictureListEvent');

$(document).ready(() => {
    loginHandler.checkLogin();
    loginHandler.loginEvent();
    pictureListEvent();
    uploadEvent();
});