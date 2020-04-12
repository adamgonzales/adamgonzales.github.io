function setup() {
createCanvas(600,600);
}


function draw() {

background(144);

//Head
noStroke();
fill(196,146,81);
ellipse(300,300,200,240);

//Hair
fill(0);
ellipse(300,210,200,60);

fill(0);
rect(200,209,24,100);
rect(377,209,24,100);

//Eyebrows
fill(0);
rect(323,269,35,4);
rect(245,269,35,4);

//Eyes
fill(250);
ellipse(340,295,42,23);
ellipse(260,295,42,23);

//Pupils
fill(0);
ellipse(340,295,18,18);
ellipse(260,295,18,18);

//Nose
fill(210,156,80);
ellipse(300,325,15,40);

//Mouth
fill(0);
arc(300,375,50,25,0,PI,CHORD);

//Neck
fill(196,146,81);
rect(278,410,50,50);

//Torso
fill(0);
rect(200,450,200,150);
}
