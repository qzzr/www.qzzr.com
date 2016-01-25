$('.js-content-loader').load('../static/quiz-examples/quiz-154047.html');
$('.js-content-item').click(function(){
  var contentItem = $(this).data("content");
  $('.js-content-item').removeClass('is-active');
  $('body').find('#' + contentItem).toggleClass('is-active');
  $( '.js-content-loader').empty();
  $( '.js-content-loader').load('../static/quiz-examples/' + contentItem + '.html');
});
$('iframe').click(function(){
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
});