const $ = require('jquery');
const Modal = require('./Modal');

function setUploadEvent() {
    const uploadModal = new Modal($('#uploadModal'), () => {
        $('#selectFile').val('');
        $('#selectFileName').val('');
        $('#previewCarPic').attr('src', '');
        $('#previewCarPic').css('display', 'none');
    });

    $('#uploadCarPicModalBtn').on('click', () => { uploadModal.open() });

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

        $.ajax({
            url: 'car/picture',
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            type: 'POST',
            success: function() {
                alert('upload success!!');
            }
        })
    })
}

$(document).ready(() => {
    setUploadEvent();
});