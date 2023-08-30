jQuery(document).ready(function(){
  /* menu */
  $('.menu>li').mouseover(function(){
    $('.sub').stop().slideDown();
  });
  $('.menu>li').mouseout(function(){
    $('.sub').stop().slideUp();
  });

  /* slide */
  setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:-300});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:-600});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:0});
  });

  /* tab */
  $('.tab p').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
    return false;
  });

  /* pop */
  $('.notice li:first').click(function(){
    $('.pop').addClass('active');
  });
  $('.btn').click(function(){
    $('.pop').removeClass('active');
  });
});