//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 07 Oct 2013
//                                                  ~~ last updated 07 Oct 2013

(function () {
    'use strict';

 // Pragmas

    /*global jQuery: false */

    /*jslint browser: true, indent: 4, maxlen: 80 */

 // Declarations

    var $;

 // Definitions

    $ = window.jQuery;

 // Out-of-scope definitions

    $(document).ready(function () {
     // This function needs documentation.
        $('#virchow-canvas')
            .width(window.innerWidth - 10)
            .height(window.innerHeight - 60);
        console.log('hi');
        return;
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
