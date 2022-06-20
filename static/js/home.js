$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat mia.lachica<br/>" + 
      "><span class='caret'>$</span> just a girl learning the basics of coding <br/> ^100" +
      "><span class='caret'>$</span> currently learning: python, java, html <br/> ^100" +
      "><span class='caret'>$</span> hobbies: reading, learning, trying to make others happy <br/> ^300" +
      "><span class='caret'>$</span> name: mia angelica lachica <br/>"
      
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
