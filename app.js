$(document).ready(function() {

  var boxes = $('.box');
  var colors = 'white green red blue yellow';
  var color = 'white';

  boxes.on('click', function() {
    $(this).addClass(color);
  })

  boxes.on('dblclick', function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
    boxes.removeClass(colors);
  })
/////////////FIX THIS.  BROKEN/////////
  boxes.mousedown(function() {
    $(this).addClass(color);
  }).mouseup(function() {

  }).mouseout(function() {
    $(this).addClass(color);
  })


  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

})
