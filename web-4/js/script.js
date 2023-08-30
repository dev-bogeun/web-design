jQuery(document).ready(function(){
  //menu
  $('.menu>li').mouseover(function(){
    $(this).find('.sub').stop().slideDown();
  });
  $('.menu>li').mouseout(function(){
    $(this).find('.sub').stop().slideUp();
  });

  /* slide */
  setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-1720});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-3440});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-0});
  })

  /* tab */
  $('.tab p').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false
  });

  /* pop  */
  $('.notice li:first').click(function(){
    $('.pop').addClass('active');
  });

  $('.btn').click(function(){
    $('.pop').removeClass('active');
  });

});