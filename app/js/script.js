// implement sly
var test_sly = new Sly('#frame',
{
  horizontal: 1,
  itemNav: 'basic',
  smart: 0,
  activateMiddle: 1,
  activatePageOn: 'mouseover',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $('#effects1').find('.scrollbar'),
  scrollBy: 1,
  speed: 300,
  elasticBounds: 1,
  easing: 'swing',
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,
  activeClass: 'active'
});
test_sly.init();

// variables
var vScroll;

//  if window is in a certain position
$(window).scroll(function(){
  vScroll = $(this).scrollTop();
  console.log(vScroll);
});

// and/or the mouse is in a certain position
$('main').mouseenter(function(){
  console.log('entered');
  // cancel stop vertical scroll on window
});

$('main').mouseleave(function(){
  console.log('left');
  // resume stop vertical scroll on window
});

// do something
