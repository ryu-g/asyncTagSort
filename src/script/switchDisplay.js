
let controller = document.getElementById('sortController')
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
	switch_hello()
	switch_poster()
	switch_webpage()
	switch_other()
	switch_cd()

	if(!hello.checked && !poster.checked && !webpage.checked && !other.checked && !cd.checked){
		displayAll()
	}
}

function displayAll(){
	for(let i = 0 ; i < items_hello.length ; i++){
			items_hello[i].style.visibility = "visible"
			items_hello[i].style.width = "30vw"
			items_hello[i].style.margin = "10px"
	}

	for(let i = 0 ; i<items_poster.length ; i++){
			items_poster[i].style.visibility = "visible"
			items_poster[i].style.width = "30vw"
			items_poster[i].style.margin = "10px"

	}

	for(let i = 0 ; i<items_webpage.length ; i++){
			items_webpage[i].style.visibility = "visible"
			items_webpage[i].style.width = "30vw"
			items_webpage[i].style.margin = "10px"

	}

	for(let i = 0 ; i<items_other.length ; i++){
			items_other[i].style.visibility = "visible"
			items_other[i].style.width = "30vw"
			items_other[i].style.margin = "10px"
	}
 
	for(let i = 0 ; i<items_cd.length ; i++){
			items_cd[i].style.visibility = "visible"
			items_cd[i].style.width = "30vw"
			items_cd[i].style.margin = "10px"
	}
}

function switch_hello(){
	for(let i = 0 ; i < items_hello.length ; i++){
		if ( hello.checked ){
			items_hello[i].style.visibility = "visible"
			items_hello[i].style.width = "30vw"
			items_hello[i].style.margin = "10px"
		}
		else{
			items_hello[i].style.visibility = "hidden"
			items_hello[i].style.width = "0px"
			items_hello[i].style.margin = "0px"
		}
	}
}

function switch_poster(){
	for(let i = 0 ; i<items_poster.length ; i++){
		if ( poster.checked ){
			items_poster[i].style.visibility = "visible"
			items_poster[i].style.width = "30vw"
			items_poster[i].style.margin = "10px"
		}
		else{ 
			items_poster[i].style.visibility = "hidden"	
			items_poster[i].style.width = "0px"
			items_poster[i].style.margin = "0px"
		}
	}
}

function switch_webpage(){
	for(let i = 0 ; i<items_webpage.length ; i++){
		if ( webpage.checked ){
			items_webpage[i].style.visibility = "visible"
			items_webpage[i].style.width = "30vw"
			items_webpage[i].style.margin = "10px"
		}
		else{ 
			items_webpage[i].style.visibility = "hidden"
			items_webpage[i].style.width = "0px"
			items_webpage[i].style.margin = "0px"
		}
	}
}

function switch_other(){
	for(let i = 0 ; i<items_other.length ; i++){
		if ( other.checked ){
			items_other[i].style.visibility = "visible"
			items_other[i].style.width = "30vw"
			items_other[i].style.margin = "10px"
		}
		else{ 
			items_other[i].style.visibility = "hidden"	
			items_other[i].style.width = "0px"
			items_other[i].style.margin = "0px"
		}
	}
}

function switch_cd(){
	for(let i = 0 ; i<items_cd.length ; i++){
		if ( cd.checked ){
			items_cd[i].style.visibility = "visible"
			items_cd[i].style.width = "30vw"
			items_cd[i].style.margin = "10px"
		}
		else{ 
			items_cd[i].style.visibility = "hidden"
			items_cd[i].style.width = "0px"
			items_cd[i].style.margin = "0px"
		}
	}
}

