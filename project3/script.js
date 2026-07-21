let count = 1

window.onload = () =>{
	setInterval(oneMinute, 60000)
}

function oneMinute(){
	if(count==30){
		count=1
	}else{
		count=count+1
	}
	document.querySelector('img').src ="proposal_images/SPLIFF_"+count+".png"
}

