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
	let url = req.url
        if(url.startsWith('/index')||url==='/'){
                return serveIndex(res)
        }
	if(url.startsWith('/app')||url==='/app.js'){
		return serveApp(res)
	}
	res.statusCode=404;
	res.end(`No encontramos ${url} `)
}

function onListening(){
	console.log(`Servidor escuchando en ${port}`)
}


function serveIndex(res){
        let fileName = path.join(__dirname, "public", "index.html")
        res.setHeader('Content-Type','text/html')
        let rs = fs.createReadStream(fileName)
        rs.pipe(res)
        rs.on('error',function(error){
                res.setHeader('Content-Type','text/plain')
                res.end(error.message)
        })	
}

function serveApp(res){
	let fileNameApp = path.join(__dirname, "public", "app.js")
	res.setHeader('Content-Type','text/javascript')
        let rs = fs.createReadStream(fileNameApp)
        rs.pipe(res)
        rs.on('error',function(error){
                res.setHeader('Content-Type','text/plain')
                res.end(error.message)
        })

}
