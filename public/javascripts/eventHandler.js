const $ = require('jquery');
const Modal = require('./Modal');
const uploadEvent = require('./uploadEvent')

function getPicture() {
    $.ajax({
        url: 'cars/picture',
        method: 'GET',
        type: 'GET'
    }).done((data) => {
        let galleryItemHtml = '';

        data.forEach((value) => {
            galleryItemHtml +=
                  '<div class="gallery-card">'
                + '  <img src=' + value.thumbnail_path + '>'
                + '</div>'
        })
        
        $('#gallery').html(galleryItemHtml);
    })
}

$(document).ready(() => {
    getPicture();
    uploadEvent();
});