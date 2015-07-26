'use strict'
const http=require("http")
const path = require("path")
const port=process.env.PORT || 8080
const server=http.createServer()
const fs = require("fs")
server.listen(port)

server.on("request",onRequest)
server.on("listening", onListening)

function onRequest(req, res){
	let fileName = path.join(__dirname, "public", "index.html");
	res.setHeader('Content-Type','text/html')
	let rs = fs.createReadStream(fileName)
	rs.pipe(res)
	rs.on('error',function(error){
		res.setHeader('Content-Type','text/html')
		res.end(error.message)
	})
}

function onListening(){
	console.log(`Servidor escuchando en ${port}`)
}

