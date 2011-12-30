require.paths.unshift(__dirname + '/lib');

var express   = require('express');

// create an express webserver
var app = express.createServer(
  express.logger(),
  express.static(__dirname + '/public'),
  express.cookieParser(),
  // set this to a secret value to encrypt session cookies
  express.session({ secret: process.env.SESSION_SECRET || 'secret123' })
);

// listen to the PORT given to us in the environment
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

// respond to GET /home
app.get('/', function(request, response) {

  // detect the http method uses so we can replicate it on redirects
  var method = request.headers['x-forwarded-proto'] || 'http';

  // render the home page
  response.render('index.ejs', {
    layout:   true,
    app:      app,
    home:     method + '://' + request.headers.host + '/',
    redirect: method + '://' + request.headers.host + request.url
  });
});

// respond to recent work
app.get('/recent_work/:id', function(request, response) {
  // detect the http method uses so we can replicate it on redirects
  var method = request.headers['x-forwarded-proto'] || 'http';

  var workDisplay = require('workDisplay');

  console.log(workDisplay);

  if (request.xhr) {
    // render the recent_work page
    response.send(workDisplay.display(request.params.id));
    // response.render('ajax/recent_work_holder.ejs', {
    //   layout:   false,
    //   app:      app,
    //   display:  workDisplay,
    //   home:     method + '://' + request.headers.host + '/',
    //   redirect: method + '://' + request.headers.host + request.url
    // });
  } else {
    // render the home page
    response.render('recent_work.ejs', {
      layout:   true,
      app:      app,
      display:  workDisplay.display(request.params.id),
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });
  }
});


// respond to recent work
app.get('/recent_work', function(request, response) {
  // detect the http method uses so we can replicate it on redirects
  var method = request.headers['x-forwarded-proto'] || 'http';

  var workDisplay = require('workDisplay');

  if (request.xhr) {
    // render the recent_work page
    response.render('recent_work.ejs', {
      layout:   false,
      app:      app,
      display:  workDisplay.display("flickyourbic"),
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });
  } else {
    // render the home page
    response.render('recent_work.ejs', {
      layout:   true,
      app:      app,
      display:  workDisplay.display("flickyourbic"),
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });

  }
});

// respond to skills
app.get('/skills', function(request, response) {
  // detect the http method uses so we can replicate it on redirects
  var method = request.headers['x-forwarded-proto'] || 'http';

  if (request.xhr) {
    // render the recent_work page
    response.render('skills.ejs', {
      layout:   false,
      app:      app,
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });
  } else {
    // render the home page
    response.render('skills.ejs', {
      layout:   true,
      app:      app,
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });

  }
});

// respond to contact
app.get('/contact', function(request, response) {
  // detect the http method uses so we can replicate it on redirects
  var method = request.headers['x-forwarded-proto'] || 'http';

  if (request.xhr) {
    // render the recent_work page
    response.render('contact.ejs', {
      layout:   false,
      app:      app,
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });
  } else {
    // render the home page
    response.render('contact.ejs', {
      layout:   true,
      app:      app,
      home:     method + '://' + request.headers.host + '/',
      redirect: method + '://' + request.headers.host + request.url
    });

  }
});

