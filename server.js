'use strict'
const http=require("http")
const path = require("path")
const port=process.env.PORT || 8080
const server=http.createServer()
const fs = require("fs")
const router = require('./router')
server.listen(port)

server.on("request",router)
server.on("listening", onListening)

function onListening(){
	console.log(`Servidor escuchando en ${port}`)
}

