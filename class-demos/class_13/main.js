window.onload = () =>{
	//1st param: function name tht is called after milliseconds passed fr
	// 2nd param: millisec. before function is executed fr
	setTimeout(sayWassup, 3000)

	// this mf timeout will not happen bc it will be cleared fr
	let mytimer = setTimeout(yo, 2000)
	console.log(mytimer) // printing out the id of the mf timerrrr
	clearTimeout(mytimer) // removing the timerrrrrr


	// add a mf timer tht repeats every 3 sec
	setInterval(myInterval,3000)

	document.body.addEventListener("click", handleClick)

}

// only mf code tht shouod be written after window.onload } are the function declerations fr

// we gotta define sayWassup
// function is jst like let but 2 make a function instead of variable fr
function sayWassup(){
	console.log('wassup')
	document.getElementById('content').textContent = "wassup"
}

// this mf another function decleration
function yo(){
	console.log('yo')
}

function myInterval(){
	console.log('3 seconds')
	let newElement = document.createElement('span')
	newElement.textContent = "yoo "
	document.querySelector("#content").appendChild(newElement)
}
function handleClick(){
	document.querySelector('#content').innerHTML = ""

}