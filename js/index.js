$(function() {
  $("#test").on('click', function () {
    $('#testLink').css("color", "red")
  })
});

$(function () {
    $('#formContinue').hide();
  $("input").on('click', function () {
    $('#formContinue').fadeIn(300);
  })

});



    
    
    // $(function() {
    //     $("#progressbar-1").progressbar({
    //        value: 20
    //     });
    //     var progressbar = $("#progressbar-1");
    //     $("#progressbar-1").progressbar("option", "max", 1024);
    //     function progress() {
    //        var val = progressbar.progressbar("value") || 0;
    //        progressbar.progressbar("value", val + 1);
    //        if ( val < 99 ) {
    //           setTimeout(progress, 100);
    //        }
    //     }
    //     setTimeout(progress, 3000);
    //  });