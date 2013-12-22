var connect = require('connect'),
    http = require('http');

var app = connect()
    .use(connect.static(__dirname + '/public'));

http.createServer(app).listen(process.env.PORT || 8080);