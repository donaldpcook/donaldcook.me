(function() {
  document.body.querySelector('.samples-thumbs').addEventListener('click', function() {
    document.body.querySelector('.samples-full').className += ' animateIn';

    //document.body.querySelector('.samples-full').className = document.body.querySelector('.samples-full').className.replace(/(?:^|\s)is-hidden(?!\S)/g , '');
  }, false);

  //document.body.querySelector('.samples-full').addEventListener('webkitAnimationEnd', function() {
    //debugger;
  //});

}());

