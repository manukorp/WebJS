console.log("HOla Mundo")
const record= document.querySelector('#record')

record.addEventListener('click', function(event){
	event.preventDefault()
	console.log("Click en record")
})
