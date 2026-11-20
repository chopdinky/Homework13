//pink is main character
//purple is obstacle circle
//blue is obstacle circle
//yellow is mouse circle

//x and y for main pink character
var pinkX = 50
var pinkY = 50

//wasd codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var purpleXs = [];
var purpleYs = [];
var purpleDiameters = [];
var purpleXSpeeds = [];
var purpleYSpeeds = [];

var blueXs = [];
var blueYs = [];
var blueDiameters = [];
var blueXSpeeds = [];
var blueYSpeeds = [];

//create yellow when mouse clicked
var mouseYellowX = -50;
var mouseYellowY = -50;

function setup()
{
    //the background
    createCanvas(500,600);

    //get random speed for purple
    for (var i = 0; i < 5; i++){
    purpleXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    purpleYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    purpleXs[i] = getRandomNumber(500);
    purpleYs[i] = getRandomNumber(600);
    purpleDiameters[i] = getRandomNumber(30);
    }

    //get random speed for blue
    for (var i = 0; i < 6; i++){
    blueXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    blueYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
    blueXs[i] = getRandomNumber(500);
    blueYs[i] = getRandomNumber(600);
    blueDiameters[i] = getRandomNumber(10);

    }
    //create Pink
    createPink(50,50);
}

function draw()
{
    //the background
    background(82,82,82);
    //call all game functions
    createBorders(10);
    drawExit();
    drawPink();
    pinkMovement();
    createPurple();
    createBlue();
    movePurple();
    moveBlue();
    drawYellow();
    drawWinMessage();
}

function pinkMovement()
{
    //handle the keys
    if(keyIsDown(w))
    {
        pinkY -= 10;
    }
    if(keyIsDown(s))
    {
        pinkY += 10;
    }
    if(keyIsDown(a))
    {
        pinkX -= 10;
    }
    if(keyIsDown(d))
    {
        pinkX += 10;
    }
}

//createPink
function createPink(x,y)
{
    pinkX = x;
    pinkY = y;
}

//draw pink
function drawPink()
{
    fill(255,105,180);
    circle(pinkX, pinkY, 25);
}

function createPurple()
{
    fill(176, 38, 255);
    for (var i = 0; i < purpleXs.length; i++)
    {
        circle(purpleXs[i], purpleYs[i], purpleDiameters[i]);
    }
}

function createBlue()
{
    fill(151, 193, 230);
    for (var i = 0; i < blueXs.length; i++)
    {
        circle(blueXs[i], blueYs[i], blueDiameters[i]);
    }
}

//move purple and keep it on screen
function movePurple()
{
    for(var i = 0; i < purpleXs.length; i++)
    {
        purpleXs[i] += purpleXSpeeds[i];
        purpleYs[i] += purpleYSpeeds[i];

    if(purpleXs[i] > width)
    {
        purpleXs[i] = 0;
    }
    else if (purpleXs[i] < 0)
    {
        purpleXs[i] = width;
    }
    if(purpleYs[i] > height)
    {
        purpleYs[i] = 0;
    }
    else if (purpleYs[i] < 0)
    {
        purpleYs[i] = height;
    }
    }
}

//move blue and keep it on screen
function moveBlue()
{
    for(var i = 0; i < blueXs.length; i++)
    {

    blueXs[i] += blueXSpeeds[i];
    blueYs[i] += blueYSpeeds[i];
    
    if(blueXs[i] > width)
    {
        blueXs[i] = 0;
    }
    else if (blueXs[i] < 0)
    {
        blueXs[i] = width;
    }
    if(blueYs[i] > height)
    {
        blueYs[i] = 0;
    }
    else if(blueYs[i] < 0)
    {
        blueYs[i] = height;
    }
}
}

//borders
function createBorders(thickness)
{
    stroke(0);
    fill(0);
    //top border
    rect(0,0,width,thickness);
    //left border
    rect(0,0,thickness,height);
    //bottom border
    rect(0,height - thickness, width, thickness);
    //right border
    rect(width - thickness, 0, thickness, height - 50);
}

//exit message
function drawExit()
{
    fill(0);
    textSize(16);
    text("EXIT", width - 50, height - 50);
}

//check to see if pink has left the exit
function drawWinMessage()
{
    if(pinkX > width && pinkY > height - 50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }
}

//mouse clicked
function mouseClicked()
{
    createYellow();
}

function drawYellow()
{
    fill(255, 255, 0);
    circle(mouseYellowX, mouseYellowY,25);
}

function createYellow()
{
    mouseYellowX = mouseX;
    mouseYellowY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}