function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	strokeWeight(50);
	if (mouseIsPressed === true){
		line(mouseX,mouseY,pmouseX,pmouseY)
	}
}