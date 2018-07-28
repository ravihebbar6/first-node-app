var http = require('http');
var url = require('url');
var querystring = require('querystring');

var serverAttr = function(req, res) {
	pathname = url.parse(req.url).pathname;
	console.log(`pathname = ${pathname}`);

	params = querystring.parse(url.parse(req.url).query);
	console.log(`params %j`, params);

	res.writeHead(200, {'Content-Type': 'text/HTML'});
	if (pathname == '/')
		res.write(`<h1>You are in root Mr. ${params['name']}</h1>`);
	else if (pathname == '/home')
		res.write('<h1>You are in home</h1>');
	else
		res.write('<h1>You are in unkown place</h1>')
	res.end();
};

var server = http.createServer(serverAttr);

server.listen(process.env.PORT || 5000);