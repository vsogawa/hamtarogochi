let mainwindow = document.getElementById("mainwindow");
mainwindow.height = 300;
mainwindow.width = 200;
let ctx = mainwindow.getContext("2d");
ctx.fillStyle = "beige";
ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);

let canvX, canvY, mouseIsDown = 0;
mainwindow.addEventListener("mousedown", mouseDown, false);
mainwindow.addEventListener("mouseup", mouseUp, false);

function mouseDown(e) {
    mouseIsDown = 1;
    mouseXY();
}

function mouseUp(e) {
    mouseIsDown = 0;
}

let bugEncounterRunning = false;

function mouseXY(e) {
    if (!e) {
        let e = event;
        canvX = e.pageX - mainwindow.offsetLeft;
        canvY = e.pageY - mainwindow.offsetTop;
        //showPos();
        if (canvX > 70 && canvX < 95 && canvY > 259 && canvY < 283 && heartstatuscounter !== 0 && ham.phase === "idle") {
            bugEncounter();
            heartstatuscounter -= 1;
            heartstatus = heartsarray[heartstatuscounter];
        }
        if (canvX > 29 && canvX < 54 && canvY > 259 && canvY < 283 && heartstatuscounter !== 4 && ham.phase === "idle") {
            heartstatuscounter += 1;
            heartstatus = heartsarray[heartstatuscounter];
            redrawAll();
        }
        //redrawAll();
    }
}

function showPos() {
    // large, centered, bright green text
    ctx.font = "24pt Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(64,255,64)";
    var str = canvX + ", " + canvY;
    if (mouseIsDown)
        str += " down";
    if (!mouseIsDown)
        str += " up";
    ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
    // draw text at center, max length to fit on canvas
    ctx.fillText(str, mainwindow.width / 2, mainwindow.height / 2, mainwindow.width - 10);
    // plot cursor
    ctx.fillStyle = "black";
    ctx.fillRect(canvX - 5, canvY - 5, 10, 10);
}
/*
let imageArray = ["background", "normal", "content", "eat", "gross", "happy", "sleep", "sleepy", "left", "leftstep", "right", "rightstep", "sniffleft", "sniffright", "hearts4",  "hearts3","hearts2","hearts1","hearts0", "food", "bug"];

let myImageArray = [];

for (let z = 0; z < imageArray.length; z++) {
    let varName = imageArray[z];
    //let `${varName}` = new Image();
    let _temp = new Image();
    //varName.src = `img/${varName}.png`;
    _temp.src = `img/${varName}.png`;
    _temp.name = varName;
    myImageArray.push(_temp);
}

let getSprite = function(name) {
    for(let i = 0; i < myImageArray.length; i++){
        if(myImageArray[i].name == name){
            return(myImageArray[i].src);
        }
    }
}
*/

let background = new Image();
background.src = "img/background.png";
let normal = new Image();
normal.src = "img/normal.png";
let content = new Image();
content.src = "img/content.png";
let eat = new Image();
eat.src = "img/eat.png";
let gross = new Image();
gross.src = "img/gross.png";
let happy = new Image();
happy.src = "img/happy.png";
let sleep = new Image();
sleep.src = "img/sleep.png";
let sleepy = new Image();
sleepy.src = "img/sleepy.png";
let left = new Image();
left.src = "img/left.png";
let leftstep = new Image();
leftstep.src = "img/leftstep.png";
let right = new Image();
right.src = "img/right.png";
let rightstep = new Image();
rightstep.src = "img/rightstep.png";
let sniffleft = new Image();
sniffleft.src = "img/sniffleft.png";
let sniffright = new Image();
sniffright.src = "img/sniffright.png";
let shock = new Image();
shock.src = "img/shock.png";
let hearts4 = new Image();
hearts4.src = "img/hearts4.png";
let hearts3 = new Image();
hearts3.src = "img/hearts3.png";
let hearts2 = new Image();
hearts2.src = "img/hearts2.png";
let hearts1 = new Image();
hearts1.src = "img/hearts1.png";
let hearts0 = new Image();
hearts0.src = "img/hearts0.png";
let food = new Image();
food.src = "img/food.png";
let bug = new Image();
bug.src = "img/bug.png";
let bug1 = new Image();
bug1.src = "img/bug1.png";
let bug2 = new Image();
bug2.src = "img/bug2.png";


let heartsarray = [hearts0, hearts1, hearts2, hearts3, hearts4];


class hamtaro {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.sprite = normal
        this.phase = "idle"
    }

}

let ham = new hamtaro(80, 180);
let heartstatuscounter = 4;
let heartstatus = heartsarray[heartstatuscounter];

background.onload = function () {
    ctx.drawImage(background, 15, 50, 170, 200);
    ctx.drawImage(ham.sprite, ham.x, ham.y);
    ctx.drawImage(heartstatus, 80, 65);
    ctx.drawImage(food, 30, 260);
    ctx.drawImage(bug, 70, 260);
}

let redrawAll = function () {
    ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
    ctx.fillStyle = "beige";
    ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);
    ctx.drawImage(background, 15, 50, 170, 200);
    ctx.drawImage(ham.sprite, ham.x, ham.y);
    ctx.drawImage(heartstatus, 80, 65);
    ctx.drawImage(food, 30, 260);
    ctx.drawImage(bug, 70, 260);
}


let stepLeft = function (steps) {
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x !== 20 && ham.phase === "idle") {
                ham.sprite = left;
                ham.x -= 10;
                redrawAll();
            }
        }, 1000 * (a + 1));
    }
}

let stepRight = function (steps) {
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x !== 150 && ham.phase === "idle") {
                ham.sprite = right;
                ham.x += 10;
                redrawAll();
            }
        }, 1000 * (a + 1));
    }
}

let randomWalking = function () {
    let numSteps = 1;
    setTimeout(function () {
        if (ham.phase === "idle") {
            let direction = ["left", "right", "neutral", "lookleft", "lookright", "left", "right"];
            let randomdirection = direction[Math.floor(Math.random() * 7)];
            if (randomdirection === "right" && ham.x !== 150) {
                numSteps = Math.floor(Math.random() * 6);
                stepRight(numSteps);
            }
            if (randomdirection === "left" && ham.x !== 20) {
                numSteps = Math.floor(Math.random() * 6);
                stepLeft(numSteps);
            }
            if (randomdirection === "neutral") {
                ham.sprite = normal;
                redrawAll();
            }
            if (randomdirection === "lookleft") {
                ham.sprite = sniffleft;
                redrawAll();
            }
            if (randomdirection === "lookright") {
                ham.sprite = sniffright;
                redrawAll();
            }
        }
        randomWalking();
    }, 5000);
};

let sleeping = function () {

}

randomWalking();

let bugEncounter = function () {
    if (bugEncounterRunning === false) {
        redrawAll();
        bugEncounterRunning = true;
        ham.phase = "bug";
        let bugResponseArray = ["gross", "shock"];
        let bugArray = [bug1, bug2];
        let randomBug = bugArray[Math.floor(Math.random() * 2)];
        setTimeout(function () {
            let randomresponse = bugResponseArray[Math.floor(Math.random() * 2)];
            if (randomresponse === "gross") {
                ham.sprite = gross;
                redrawAll();
                ctx.drawImage(randomBug, ham.x + 6, (ham.y - 20));
            }
            if (randomresponse === "shock") {
                ham.sprite = shock;
                redrawAll();
                ctx.drawImage(randomBug, ham.x + 6, (ham.y - 20));
            }
        }, 100)
        setTimeout(function () {
            ham.phase = "idle";
            ham.sprite = normal;
            redrawAll();
            bugEncounterRunning = false;
        }, 2500)
    }
}
