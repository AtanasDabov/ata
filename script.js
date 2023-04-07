$(function() {
  $('#countdown').countdown('2017/01/01', function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
  });
});

