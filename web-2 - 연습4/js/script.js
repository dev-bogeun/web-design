$(document).ready(function(){
  $('.menu li').mouseover(function(){
    $('.sub').stop().slideDown();
  });
  $('.menu li').mouseout(function(){
    $('.sub').stop().slideUp();
  })

  setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-1200});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:-2400});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft:0});
  });

  $('.tab p').click(function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active');
  })

  $('.notice li:first').click(function(){
    $('.pop').addClass('active');
  });
  $('.btn').click(function(){
    $('.pop').removeClass('active');
  });
});