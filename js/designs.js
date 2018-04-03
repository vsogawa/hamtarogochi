let mainwindow = document.getElementById("mainwindow");
mainwindow.height = 300;
mainwindow.width = 200;
let ctx = mainwindow.getContext("2d");
ctx.fillStyle = "beige";
ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);


let background = new Image();
background.src = "img/background-2.jpg";
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

background.onload = function () {
    ctx.drawImage(background, 15, 50, 170, 200);
}


class hamtaro {
    constructor(x, y, status) {
        this.x = x
        this.y = y
        this.phase = "idle"
        if (status === "normal") {
            this.sprite = normal
        }
        if (status === "content") {
            this.sprite = content
        }
        if (status === "eat") {
            this.sprite = eat
        }
        if (status === "gross") {
            this.sprite = gross
        }
        if (status === "happy") {
            this.sprite = happy
        }
        if (status === "sleep") {
            this.sprite = sleep
        }
        if (status === "sleepy") {
            this.sprite = sleepy
        }
        if (status === "left") {
            this.sprite = left
        }
        if (status === "leftstep") {
            this.sprite = leftstep
        }
        if (status === "right") {
            this.sprite = right
        }
        if (status === "rightstep") {
            this.sprite = rightstep
        }
    }

}

let ham = new hamtaro(80, 180, "normal");

content.onload = function () {
    ctx.drawImage(ham.sprite, ham.x, ham.y);
}

let stepLeft = function (steps) {
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x !== 20) {
                ham.sprite = left;
                ham.x -= 10
                ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
                ctx.fillStyle = "beige";
                ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);
                ctx.drawImage(background, 15, 50, 170, 200)
                ctx.drawImage(ham.sprite, ham.x, ham.y);
            }
        }, 1000 * (a + 1));
    }
}


let stepRight = function (steps) {
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x !== 150) {
                ham.sprite = right;
                ham.x += 10
                ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
                ctx.fillStyle = "beige";
                ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);
                ctx.drawImage(background, 15, 50, 170, 200)
                ctx.drawImage(ham.sprite, ham.x, ham.y);
            }
        }, 1000 * (a + 1));
    }
}

let randomWalking = (function () {
    let numSteps = 1;
    for (let b = 0; b < 50; b++) {
        setTimeout(function () {
            if (ham.phase === "idle") {
                let direction = ["left", "right", "neutral"];
                let randomnumber = Math.floor(Math.random() * 3);
                let randomdirection = direction[randomnumber];
                if (randomdirection === "right" && ham.x !== 150) {
                    numSteps = Math.floor(Math.random() * 7);
                    stepRight(numSteps);
                }
                if (randomdirection === "left" && ham.x !== 20) {
                    numSteps = Math.floor(Math.random() * 6);
                    stepLeft(numSteps);
                }
                if (randomdirection === "neutral") {
                    ham.sprite = normal;
                    ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
                    ctx.fillStyle = "beige";
                    ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);
                    ctx.drawImage(background, 15, 50, 170, 200)
                    ctx.drawImage(ham.sprite, ham.x, ham.y);
                }
            }
        }, 5000 * (b + 1));
    }
})();






