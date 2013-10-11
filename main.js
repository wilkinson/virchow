//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 07 Oct 2013
//                                                  ~~ last updated 11 Oct 2013

(function () {
    'use strict';

 // Pragmas

    /*global Dropbox, jQuery: false */

    /*jslint browser: true, devel: true, indent: 4, maxlen: 80 */

 // Declarations

    var $, open, run_custom, save;

 // Definitions

    $ = window.jQuery;

    open = function () {
     // This function needs documentation.
        Dropbox.choose({
            cancel: function () {
             // This function is called when a user closes the dialog without
             // selecting a file.
                //alert("Oh no, didn't find what you were looking for?");
                return;
            },
            extensions: ['images'],
            linkType: 'direct',
            multiselect: false,
            success: function (files) {
             // This function is called when a user selects an item in the
             // Chooser.
                var image = new Image();
                image.crossOrigin = 'Anonymous';
                image.onload = function () {
                 // This function is called when the image has been downloaded
                 // by the browser. See also: http://goo.gl/uH9byt.
                    var canvas, ctx, data;
                    canvas = document.getElementById('virchow-canvas');
                    canvas.height = image.height;
                    canvas.width = image.width;
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0);
                    data = ctx.getImageData(0, 0, image.width, image.height);
                    console.log(data);
                    return;
                };
                image.src = files[0].link; // URL
                return;
            }
        });
        return;
    };

    run_custom = function (f) {
     // This function, which is currently just a placeholder, will execute a
     // user-specified algorithm on the current contents of the HTML5 Canvas.
        // ...
        console.log(f);
        return;
    };

    save = function () {
     // This function is a placeholder.
        // ...
        return;
    };

 // Out-of-scope definitions

    window.VIRCHOW = {
        open: open,
        run_custom: run_custom,
        save: save
    };

    $(document).ready(function () {
     // This function needs documentation.

        var canvas = document.getElementById('virchow-canvas');

        canvas.height = window.innerHeight - 60;
        canvas.width = window.innerWidth - 10;

        canvas.style['border-color'] = '#e6e6e6';

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
