$(document).ready(function(){
  $('#menu2total').hide();
  var scroll_pos = 0;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 210) {
          $("#menu2total").slideDown();
          $("#navbar_principal").hide();
      } else {
          $("#menu2total").hide();
          $("#navbar_principal").slideDown();
      }
  });
});
