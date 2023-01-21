(function($) {
    'use strict';
    $(document).ready(function() {
        $("#lightgallery").lightGallery({
            mode: 'lg-slide',
            download: true,
            fullScreen: false,
            selector: '.gallery-item',
        });
            });
})(jQuery);