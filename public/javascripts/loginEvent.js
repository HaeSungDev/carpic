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
            alert('login success!');
            $('#loginModalCloseBtn')[0].click();
        }).fail((jqXHR, textStatus) => {
            if (jqXHR.status === '401') {
                alert('ID or Password is wrong');
            } else {
                alert('server error');
            }
        });
    })
}