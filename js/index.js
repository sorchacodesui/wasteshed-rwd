// on donations page - hover in support section //
$(function () {
  $('.hiddenText').hide();

  $('#viaPaypal').hover(function() {
    $('#viaPaypal .hiddenText').fadeIn(300);
  }, function() {
    $('#viaPaypal .hiddenText').fadeOut(300);
  }
  );
  $('#donateMaterials').hover(function() {
    $('#donateMaterials .hiddenText').fadeIn(300);
  }, function() {
    $('#donateMaterials .hiddenText').fadeOut(300);
  }
  );
});
// on itemize.html page *//
// to prevent continue button until user selects at least one item to donate to the wishlist //
$(function () {
    $('#formContinue').hide();
  $('input').on('click', function () {
    $('#formContinue').fadeIn(300);
  })

});
