const http = require('http');

const fs = require('fs');

const url = require('url');

http.createServer((req,res)=>{

	res.writeHead(200,{'Content-Type':'text/html'});

	var path = req.url;

	switch(path){
		case '/':
			res.write('<h1>Home page</h1>')
			res.end()
			break;

		case '/about':
			if(path === '/about'){
				fs.readFile('about.html',(err,data)=>{
					if(err){
						return err;
					}else{
						res.write(data)
						res.end()
					}
				})}
			break;

		case '/contact':
			res.write('<h1>contact page</h1>')
			res.end()
			break;

		default:
			res.writeHead(404)
			res.write('<h1>page not found</h1>')
			res.end()
		break;

	}
	

	
}).listen(8000,()=>{
	console.log(`server is running on http://${'localhost'}:${8000}`)
})