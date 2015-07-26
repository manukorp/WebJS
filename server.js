'use strict'
const http=require("http")
const port=process.env.PORT || 8080
const server=http.createServer()
const fs = require("fs")
server.listen(port)

server.on("request",onRequest)
server.on("listening", onListening)

function onRequest(req, res){
	let file = fs.readFile('public/index.html', function(error, file){
		if(error){
			return res.end(error.msg)
		}else{
			return res.end(file)
		}
	})
}

function onListening(){
	console.log("Servidor escuchando en : "+port)
}

