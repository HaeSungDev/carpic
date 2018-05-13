const $ = require('jquery');
const Modal = require('./Modal');

module.exports = function loginEvent() {
    console.log('asdf');
    const loginModal = new Modal($('#loginModal'), () => {
        $('#userid').val('');
        $('#passwd').val('');
    });

    $('#loginBtn').on('click', () => { loginModal.open() });
}