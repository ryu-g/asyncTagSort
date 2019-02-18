
let controller = document.getElementsByClassName('sortController')[0]
controller.addEventListener('click',switchDisplay, false)

	const hello = document.getElementById("hello")
	const items_hello = document.getElementsByClassName('hello')

	const poster = document.getElementById("poster")
	const items_poster = document.getElementsByClassName('poster')

	const webpage = document.getElementById("webpage")
	const items_webpage = document.getElementsByClassName('webpage')

	const other = document.getElementById("other")
	const items_other = document.getElementsByClassName('other')

	const cd = document.getElementById("cd")
	const items_cd = document.getElementsByClassName('cd')
function switchDisplay(){


	console.log("-------")
	for(let i = 0 ; i < items_hello.length ; i++){
		console.log(i);
		if ( hello.checked )
			items_hello[i].style.display = "block"
		else
			items_hello[i].style.display = "none"
	}

	for(let i = 0 ; i<items_poster.length ; i++){
		if ( poster.checked )
			items_poster[i].style.display = "block"
		else 
			items_poster[i].style.display = "none"	
	}

	for(let i = 0 ; i<items_webpage.length ; i++){
		if ( webpage.checked )
			items_webpage[i].style.display = "block"
		else 
			items_webpage[i].style.display = "none"
	}

	for(let i = 0 ; i<items_other.length ; i++){
		if ( other.checked )
			items_other[i].style.display = "block"
		else 
			items_other[i].style.display = "none"	
	}
 
	for(let i = 0 ; i<items_cd.length ; i++){
		if ( cd.checked )
			items_cd[i].style.display = "block"
		else 
			items_cd[i].style.display = "none"
	}

	if(!hello.checked && !poster.checked && !webpage.checked && !other.checked && !cd.checked){
		displayAll()
	}
}

function displayAll(){
	for(let i = 0 ; i < items_hello.length ; i++){
			items_hello[i].style.display = "block"
	}

	for(let i = 0 ; i<items_poster.length ; i++){
			items_poster[i].style.display = "block"	
	}

	for(let i = 0 ; i<items_webpage.length ; i++){
			items_webpage[i].style.display = "block"
	}

	for(let i = 0 ; i<items_other.length ; i++){
			items_other[i].style.display = "block"	
	}
 
	for(let i = 0 ; i<items_cd.length ; i++){
			items_cd[i].style.display = "block"
	}
}

