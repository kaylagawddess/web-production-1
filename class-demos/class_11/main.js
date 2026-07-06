// to write some comments yo

//function name = alert ()
// parameter = "this is a javascript alert BOW !"
// text wrapped in a '' or "" is called a mf string heehee
// alert the name of a function fr
alert( 'this is a javasrcipt alert BOW !')

// console not shown on webpage , but open inspector -> console to view message 
// function name = log
// parameter = " yeahh this a console message fr"
// log belongs to the console _> console.log
// log does not exist outside of console fr 
console.log("yeahh this a console message fr")

// in order for javascript to manipulate the HTML file needs to be fully loaded you heard
// we detect the page loaded fr usinggg :
// "load " -> parameter #1 , which event we looking for 
// we waiting for the WINDOW TO FINISH LOAD the HTML 
// ()=>{}  -> parameter #2, action / function execute when page fully load bow
window.addEventListener("load", ()=> {
	// all our code n sht tht changes the HTML/CSS will reside in these {}
	console.log(' page has loaded, js connected')
} )
// window.onload = () => {} // shorthand 