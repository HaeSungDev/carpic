const $ = require('jquery');
const Modal = require('./Modal');

module.exports = function loginEvent() {
    const loginModal = new Modal($('#loginModal'), () => {
        $('#userid').val('');
        $('#passwd').val('');
    });

    $('#loginModalBtn').on('click', () => { loginModal.open() });

    $('#loginBtn').on('click', (e) => {
        e.preventDefault();
        $.ajax({
            url: 'login',
            data: $('#loginForm').serialize(),
            method: 'POST',
        }).done((data) => {
            if (data.result === 'success') {
                alert('login success!');
            } else {
                alert('login fail!');
            }
            $('#loginModalCloseBtn')[0].click();
        }).fail((jqXHR, textStatus) => {
            alert('error occurred during the request!');
        });
    })
}