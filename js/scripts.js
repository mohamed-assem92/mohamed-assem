jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');

        $("#contactForm").submit(function(e) {
            e.preventDefault();
            $.ajax({
              type: "POST",
              url: "sendemail.php",
              data: $("#contactForm").serialize(),
              success: function(data)
              {
                console.log("success");
                console.log(data);
              },error: function (err) {
                console.log("error");
                console.log(err);
              }
            });
  
          });

    }());


}); // JQuery end