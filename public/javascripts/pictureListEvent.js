const $ = require('jquery');

module.exports = function pictureListEvent() {
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