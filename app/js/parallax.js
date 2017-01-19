$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  // background scroll

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
  
});
