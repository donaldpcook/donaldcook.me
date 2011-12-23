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
