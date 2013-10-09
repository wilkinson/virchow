//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 07 Oct 2013
//                                                  ~~ last updated 08 Oct 2013

(function () {
    'use strict';

 // Pragmas

    /*global Dropbox, jQuery: false */

    /*jslint browser: true, devel: true, indent: 4, maxlen: 80 */

 // Declarations

    var $, choose, run_custom;

 // Definitions

    $ = window.jQuery;

    choose = function () {
     // This function needs documentation.
        Dropbox.choose({
            cancel: function () {
             // This function is called when a user closes the dialog without
             // selecting a file.
                alert("Oh no, didn't find what you were looking for?");
                return;
            },
            extensions: ['.jpeg', '.JPG', '.jpg', '.png'],
            linkType: 'direct',
            multiselect: false,
            success: function (files) {
             // This function is called when a user selects an item in the
             // Chooser.
                var image = new Image();
                image.onload = function () {
                 // This function is called when the image has been downloaded
                 // by the browser.
                    $('#virchow-canvas')
                        .height(image.height).width(image.width)[0]
                            .getContext('2d').drawImage(image, 0, 0);
                    return;
                };
                image.src = files[0].link; // URL
                return;
            }
        });
        return;
    };

    run_custom = function (f) {
     // This function executes a user-specified algorithm on the current
     // contents of the HTML5 Canvas.
        var canvas, ctx, i, j, m, n, x;
        canvas = $('#virchow-canvas')[0];
        ctx = canvas.getContext('2d');
        m = canvas.width;
        n = canvas.height;
     // The next line is going to cause a problem until I rewrite the retrieval
     // from Dropbox to use AJAX+CORS instead of an <img> ...
        x = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(x);
        return;
    };

 // Out-of-scope definitions

    window.VIRCHOW = {
        choose: choose,
        run_custom: run_custom
    };

    $(document).ready(function () {
     // This function needs documentation.

        $('#virchow-canvas')
            .width(window.innerWidth - 10)
            .height(window.innerHeight - 60)
            .css('border-color', '#e6e6e6');

        $(document.body).css('background-color', '#f8f8f8');

        $('.nav li.disabled a').click(function() {
         // This function disables all DOM elements that have the ".disabled"
         // CSS class.
            return false;
        });

        return;

    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
