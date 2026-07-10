window.addEventListener("load", ()=>{
	let container = document.querySelector("#container")

	// add an event listener that detects when the container is hovered over with the mouse using mouseenter
	container.addEventListener("mouseenter", ()=>{
		container.style.backgroundColor = "#606C38"
	})

	container.addEventListner("mouseleave", ()=>{
		container.style.backgroundColor = "#BC6C25"
	})
})

// inside the function, retrieve the id of the div created in index.htmln& assign it a mf variable

// another way to write the first line of code fr :
// window.onload = () => {}

// document keword represents the html document AKA the DOM

// the property accessed to change the style of a selected element in js + how to change the background color of thf the div selected fr :
// document.querySelector("#container").style.backgroundColor
// OR document.getElementById('container').style.backgroundColor
//OR container.style.backgroundColor
