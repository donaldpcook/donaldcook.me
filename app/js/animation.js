(function() {
  document.body.querySelector('.js-thumbs').addEventListener('click', function(evt) {
    var sampleContainer = document.body.querySelector('.samples-full');

    if (evt.target.dataset.sample) {
      showBlock(evt.target.dataset.sample, sampleContainer);
    }

    document.body.querySelector('.samples-full').className += ' animateIn';
  }, false);

  document.body.querySelector('.samples-full').addEventListener('click', function(evt) {
    if (evt.target.className.indexOf('js-close') > -1) {
      evt.currentTarget.className = evt.currentTarget.className.replace(/(?:^|\s)animateIn(?!\S)/g, '');
    }

  });

  var showBlock = function(idx, sampleContainer) {
    var oldContainer = sampleContainer.querySelector('.is-shown');
    var newContainer = sampleContainer.querySelectorAll('[data-sample="' + idx + '"]');

    if (oldContainer) {
      oldContainer.className = oldContainer.className.replace(/(?:^|\s)is-shown(?!\S)/g, '');
    }

    newContainer[0].className += ' is-shown';
  };
}());

