$(document).ready(function(){
  $('.menu li').mouseover(function(){
    $('.sub').stop().slideDown();
    $('.bg').stop().slideDown();
  })
  $('.menu li').mouseout(function(){
    $('.sub').stop().slideUp();
    $('.bg').stop().slideUp();
  });

  setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-1200});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-2400});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:0});
  });
});