var http = require('http')
var ip = '', count = 0
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  ip = 'addr: '+add;
})

http.createServer(function(req, res){
	res.writeHead(200);
	var str = count++ + ')' + 'from IP:' + ip;
	res.end(str);
	console.log('Received a request\n');
}).listen(3000);

console.log('Server started on port 3000\n');
