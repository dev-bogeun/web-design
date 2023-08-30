$(document).ready(function(){
  $('.menu li').mouseover(function(){
    $(this).find('.sub').stop().slideDown();
  });
  $('.menu li').mouseout(function(){
    $(this).find('.sub').stop().slideUp();
  });

  setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:-400});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:-800});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop:0});
  })

  $('.tab p').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
  });
});