//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 07 Oct 2013
//                                                  ~~ last updated 08 Oct 2013

(function () {
    'use strict';

 // Pragmas

    /*global jQuery: false */

    /*jslint browser: true, devel: true, indent: 4, maxlen: 80 */

 // Declarations

    var $;

 // Definitions

    $ = window.jQuery;

 // Out-of-scope definitions

    $('#db-chooser').on('DbxChooserSuccess', function (evt) {
     // This function is based on documentation from http://goo.gl/Hzq8z5.
        var ext, flag, image;
        ext = evt.originalEvent.files[0].link.split('.').pop().toLowerCase();
        flag = ((ext === 'bmp')   ||
                (ext === 'gif')   ||
                (ext === 'jpg')   ||
                (ext === 'jpeg')  ||
                (ext === 'png')   ||
                (ext === 'tif')   ||
                (ext === 'tiff'));
        if (flag === false) {
            console.error('Error: Unsupported file type.');
            return;
        }
        image = new Image();
        image.onload = function () {
         // This function needs documentation.
            $('#virchow-canvas')
                .height(image.height).width(image.width)[0]
                    .getContext('2d').drawImage(image, 0, 0);
            return;
        };
        image.src = evt.originalEvent.files[0].link; // URL
        return;
    });

    $(document).ready(function () {
     // This function needs documentation.

        $('#virchow-canvas')
            .width(window.innerWidth - 10)
            .height(window.innerHeight - 60)
            .css('border-color', '#e6e6e6');

        $(document.body).css('background-color', '#f8f8f8');

        $(".nav li.disabled a").click(function() {
            return false;
        });

        return;

    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
