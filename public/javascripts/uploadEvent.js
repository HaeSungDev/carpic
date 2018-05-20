const $ = require('jquery');
const Modal = require('./Modal');
const pictureListEvent = require('./pictureListEvent');
const loginHandler = require('./loginHandler');

module.exports = function uploadEvent() {
    const uploadModal = new Modal($('#uploadModal'), () => {
        $('#selectFile').val('');
        $('#selectFileName').val('');
        $('#previewCarPic').attr('src', '');
        $('#previewCarPic').css('display', 'none');
    });
    
    $('#selectFile').on('change', (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            $('#previewCarPic').attr('src', reader.result);
        }
        reader.readAsDataURL(event.target.files[0]);

        $('#previewCarPic').css('display', 'inline');
    });

    $('#uploadCarPicBtn').on('click', () => {
        const formData = new FormData();

        formData.append('carpic', $('#selectFile')[0].files[0]);

        loginHandler.checkLogin();
        $.ajax({
            url: 'cars/picture',
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            type: 'POST'
        }).done(() => {
            alert('upload success!!');
            pictureListEvent();
        }).fail((jqXHR, textStatus) => {
            if (jqXHR.status === 415) {
                alert('This file is not supported!!');
            } else if (jqXHR.status === 401) {
                alert('Please, login');
                $('#uploadModalCloseBtn')[0].click();
                setTimeout(() => {
                    $('#loginModalBtn')[0].click();
                }, 100);
            } else { 
                alert('file upload fail!!');
            }
        });
    });
}