$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var wPort = $(this).width();
  var hPort = $(this).height();
  console.log(wPort + ' x ' + hPort);

  // background scroll

  // $('.logo').css({
  //   'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  // });

});
