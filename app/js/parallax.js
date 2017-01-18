$(window).scroll(function(){
  var sScroll = $(this).scrollTop();
  console.log(wScroll);

  // background scroll
  $('.callout').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
});
