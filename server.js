'use strict'
const http=require("http")
const port=process.env.PORT || 8080
const server=http.createServer()
server.listen(port)

server.on("request",onRequest)
server.on("listening", onListening)

function onRequest(req, res){
	res.end("Hola Manuko")
}

function onListening(){
	console.log("Servidor escuchando en : "+port)
}

