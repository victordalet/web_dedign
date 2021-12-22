const titre = document.querySelector("h1");
const txt = document.querySelector("p");
const btn = document.querySelector("button");
const imgLaptop = document.querySelector(".laptop");

const TL1 = new TimelineMax({pause : true});

TL1
.from(titre,1, {y: -100, opacity : 0} )
.from(txt,1, {opacity : 0}, '-=0.4' )
.from(btn,1, {opacity : 0}, '-=0.5' )
.from(imgLaptop,1, {x: 100, opacity : 0}, '-=0.5' )

TL1.play()