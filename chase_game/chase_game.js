var imgX = 40;
var imgY = 40;
var imgSize = 140;
var score = 0;
var gameState = "L1";
function preload(){
img = loadImage('doomguy.png');
img1 = loadImage('imp.png');
}

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20); } // end setup


function draw() {
background(220);
if (gameState=="L1"){
levelOne(); }
if (gameState=="L2"){ 
levelTwo(); }
if (gameState=="L3"){
levelThree(); }
if (gameState=="L4"){
levelFour(); }
if (gameState=="L5"){
levelFive(); }
if (gameState=="L6"){
levelSix(); }

text(("Kill Score: " + score), width/2, 40); } 
// end draw

function levelOne(){
text("Level 1 ", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
if (score > 10) {
gameState = "L2";
}
image(img1, imgX, imgY, 75, 75);
} // end level one


function levelTwo(){
background(255,0,0);
text("Level 2", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
if (score > 20) {
gameState = "L3";
}
image(img1, imgX, imgY, 75, 75);
} // end level two


function levelThree(){
background(220);
text("Level 3 ", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
if (score > 30) {
gameState = "L4";
}
image(img1, imgX, imgY, 75, 75);
} // end level three


function levelFour(){
background(255,0,0);
text("Level 4 ", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
if (score > 40) {
gameState = "L5";
}
image(img1, imgX, imgY, 75, 75);
} // end level four


function levelFive(){
background(220);
text("Level 5 ", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
if (score > 50) {
gameState = "L6";
}
image(img1, imgX, imgY, 75, 75);
} // end level five

function levelSix(){
background(255,0,0);
text("Level 6: Rip and Tear! ", width/2, height-20);
sight();
var distToImg = dist(imgX, imgY, mouseX, mouseY);
if (distToImg < imgSize / 2) {
imgX = random(width);
imgY = random(height);
score = score + 1;
}
image(img1, imgX, imgY, 75, 75);
}

function sight(){
image(img, mouseX-10, mouseY-10);
}
function sight1(){
image(img1, mouseX-10, mouseY-10);
}
