(function() {
  document.body.querySelector('.js-thumbs').addEventListener('click', function() {
    document.body.querySelector('.samples-full').className += ' animateIn';
  }, false);

  document.body.querySelector('.js-close').addEventListener('click', function(evt) {
    var animateEl = evt.currentTarget.parentNode.parentNode.parentNode;
    animateEl.className = animateEl.className.replace(/(?:^|\s)animateIn(?!\S)/g, '');
  });

}());

