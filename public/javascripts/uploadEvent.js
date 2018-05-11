
module.exports = function uploadEvent() {
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
            url: 'cars/picture',
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            type: 'POST'
        }).done(() => {
            alert('upload success!!');
            getPicture();
        }).fail((jqXHR, textStatus) => {
            if (jqXHR.status == 415)
                alert('This file is not supported!!');
            else 
                alert('file upload fail!!');
        });
    })
}