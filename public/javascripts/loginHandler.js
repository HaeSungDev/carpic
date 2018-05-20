const $ = require('jquery');
const Modal = require('./Modal');

module.exports = {
    loginModal: new Modal($('#loginModal'), () => {
        $('#userid').val('');
        $('#passwd').val('');
    }),
    // 로그인 체크
    checkLogin: function() {
        $.ajax({
            url: 'login',
            method: 'GET',
        }).done(() => {
            $('#loginModalBtn').text('LOGOUT');
            $('#loginModalBtn').attr('href', '#!');
            $('#loginModalBtn').removeClass('modal-trigger');
        }).fail((jqXHR, textStatus) => {
            $('#loginModalBtn').text('LOGIN');
            $('#loginModalBtn').attr('href', '#loginModal');
            $('#loginModalBtn').addClass('modal-trigger');
        });
    },
    // 로그인 이벤트 설정
    loginEvent: function() {
        $('#loginBtn').on('click', (e) => {
            e.preventDefault();
            $.ajax({
                url: 'login',
                data: $('#loginForm').serialize(),
                method: 'POST',
            }).done((data) => {
                alert('login success!');
                $('#loginModalCloseBtn')[0].click();
                $('#loginModalBtn').text('LOGOUT');
                $('#loginModalBtn').attr('href', '#!');
                $('#loginModalBtn').removeClass('modal-trigger');
            }).fail((jqXHR, textStatus) => {
                if (jqXHR.status === 401) {
                    alert('ID or Password is wrong');
                } else {
                    alert('server error');
                }
            });
        });
    }
}