let mainwindow = document.getElementById("mainwindow");
mainwindow.height = 300;
mainwindow.width = 200;
let ctx = mainwindow.getContext("2d");
ctx.fillStyle = "beige";
ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);


let bugEncounterRunning = false;
let foodTimeRunning = false;

let clickGift = (function () {
    $(".fa-gift").click(function () {
        if (ham.phase === "idle") {
            foodTime();
        }
    })
})();

let clickBug = (function () {
    $(".fa-bug").click(function () {
        if (ham.phase === "idle") {
            bugEncounter();
        }
    })
})();

//IMAGE DECLARATIONS
let background = new Image();
background.src = "img/background.png";
let normal = new Image();
normal.src = "img/normal.png";
let content = new Image();
content.src = "img/content.png";
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
let scare1 = new Image();
scare1.src = "img/scare1.png";
let back = new Image();
back.src = "img/back.png";

//vvvvvvvvvvvvv comment out to test variable creation
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

//^^^^^^^^^^^^^ comment out to test variable creation
let bug1 = new Image();
bug1.src = "img/bug1.png";
let bug2 = new Image();
bug2.src = "img/bug2.png";
let zzz = new Image();
zzz.src = "img/zzz.png";
let dizzy1 = new Image();
dizzy1.src = "img/dizzy1.png";
let dizzy2 = new Image();
dizzy2.src = "img/dizzy2.png";
let dizzy3 = new Image();
dizzy3.src = "img/dizzy3.png";
let grouchy = new Image();
grouchy.src = "img/grouchy.png";
let grouchy2 = new Image();
grouchy2.src = "img/grouchy2.png";
let grouchy3 = new Image();
grouchy3.src = "img/grouchy3.png";
let wake = new Image();
wake.src = "img/wake.png";
let apple = new Image();
apple.src = "img/apple.png";
let bean1 = new Image();
bean1.src = "img/bean1.png";
let bean2 = new Image();
bean2.src = "img/bean2.png";
let bean3 = new Image();
bean3.src = "img/bean3.png";
let berry1 = new Image();
berry1.src = "img/berry1.png";
let berry2 = new Image();
berry2.src = "img/berry2.png";
let berry3 = new Image();
berry3.src = "img/berry3.png";
let berry4 = new Image();
berry4.src = "img/berry4.png";
let cd = new Image();
cd.src = "img/cd.png";
let drink = new Image();
drink.src = "img/drink.png";
let goldapple = new Image();
goldapple.src = "img/goldapple.png";
let potion = new Image();
potion.src = "img/potion.png";
let scarf = new Image();
scarf.src = "img/scarf.png";
let seed = new Image();
seed.src = "img/seed.png";
let shades = new Image();
shades.src = "img/shades.png";
let eat1 = new Image();
eat1.src = "img/eat1.png";
let eat2 = new Image();
eat2.src = "img/eat2.png";
let getfood1 = new Image();
getfood1.src = "img/getfood1.png";
let getfood2 = new Image();
getfood2.src = "img/getfood2.png";
let getfood3 = new Image();
getfood3.src = "img/getfood3.png";
let getfood4 = new Image();
getfood4.src = "img/getfood4.png";
let shrug = new Image();
shrug.src = "img/shrug.png";
let what = new Image();
what.src = "img/what.png";
let hide = new Image();
hide.src = "img/hide.png";


//Test dynamic variable creation
/*
let myVariables = {};
let varNames = ["hearts0", "hearts1", "hearts2", "hearts3", "hearts4"];
for (var i=0;i<varNames.length;i+=1){
  window[varNames[i]] = `<img src = "img/${varNames[i]}.png>"`;
}
console.log(hearts0);
*/

class hamtaro {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.sprite = normal
        this.phase = "idle"
    }

}

let ham = new hamtaro(80, 180);

let heartsarray = [hearts0, hearts1, hearts2, hearts3, hearts4];
let heartstatuscounter = 4;
let heartstatus = heartsarray[heartstatuscounter];

background.onload = function () {
    ctx.drawImage(background, 15, 50, 170, 200);
    ctx.drawImage(ham.sprite, ham.x, ham.y);
    ctx.drawImage(heartstatus, 80, 65);
    ctx.fillStyle = "tan";
    ctx.font = "20px Arial Black";
    ctx.fillText("Hamtarogochi!", 10, 35);
}

let redrawAll = function () {
    ctx.clearRect(0, 0, mainwindow.width, mainwindow.height);
    ctx.fillStyle = "beige";
    ctx.fillRect(0, 0, mainwindow.width, mainwindow.height);
    ctx.drawImage(background, 15, 50, 170, 200);
    ctx.drawImage(ham.sprite, ham.x, ham.y);
    ctx.drawImage(heartstatus, 80, 65);
    ctx.fillStyle = "tan";
    ctx.font = "20px Arial Black";
    ctx.fillText("Hamtarogochi!", 10, 35);
    console.log(ham.phase);
}

let getsHungry = function () {
    setTimeout(function () {
        if (heartstatuscounter === 1 || heartstatuscounter === 0) {
            if (heartstatuscounter === 1) {
                heartstatuscounter -= 1;
                heartstatus = heartsarray[heartstatuscounter];
            }
            redrawAll();
            if (ham.phase === "idle") {
                confused();
            }
        } else {
            heartstatuscounter -= 1;
            heartstatus = heartsarray[heartstatuscounter];
            redrawAll();
        }
        getsHungry();
    }, 40000)
}
getsHungry();

let confused = function () {
    ham.phase = "confused";
    $(".fa").addClass("inactive");
    ham.sprite = dizzy1;
    redrawAll();
    for (let w = 0; w < 13; w++) {
        setTimeout(function () {
            if (w % 4 === 0) {
                ham.sprite = dizzy2;
                redrawAll();
            } else if (w % 4 === 1) {
                ham.sprite = dizzy3;
                redrawAll();
            } else if (w % 4 === 2) {
                ham.sprite = dizzy2;
                redrawAll();
            } else {
                ham.sprite = dizzy1;
                redrawAll();
            }
        }, 350 * (w + 1));
    }
    setTimeout(function () {
        ham.phase = "idle";
        $(".fa").removeClass("inactive");
        ham.sprite = grouchy;
        redrawAll();
    }, 4550);
}

let stepLeft = function (steps) {
    ham.phase = "walking";
    $(".fa").addClass("inactive");
    let totalInactiveLength = steps * 400 + 800;
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x > 20 && a % 2 === 0) {
                ham.sprite = leftstep;
                ham.x -= 5;
                redrawAll();
            }
            if (ham.x > 20 && a % 2 === 1) {
                ham.sprite = left;
                ham.x -= 5;
                redrawAll();
            }
        }, 400 * (a + 1));

    }
    setTimeout(function () {
        ham.phase = "idle";
        $(".fa").removeClass("inactive");
        redrawAll();
    }, totalInactiveLength);
}

let stepRight = function (steps) {
    ham.phase = "walking";
    $(".fa").addClass("inactive");
    let totalInactiveLength = steps * 400 + 800;
    for (let a = 0; a < steps; a++) {
        setTimeout(function () {
            if (ham.x < 150 && a % 2 === 0) {
                ham.sprite = rightstep;
                ham.x += 5;
                redrawAll();
            }
            if (ham.x < 150 && a % 2 === 1) {
                ham.sprite = right;
                ham.x += 5;
                redrawAll();
            }
        }, 400 * (a + 1));
    }
    setTimeout(function () {
        ham.phase = "idle";
        $(".fa").removeClass("inactive");
        redrawAll();
    }, totalInactiveLength);
}

let randomWalking = function () {
    let numSteps = 2;
    setTimeout(function () {
        if (ham.phase === "idle") {
            let direction = ["left", "right", "neutral", "lookleft", "lookright", "back"];
            let randomdirection = direction[Math.floor(Math.random() * direction.length)];
            if (randomdirection === "right" && ham.x !== 150) {
                numSteps = ((Math.floor(Math.random() * 6)) + 1) * 2;
                stepRight(numSteps);
            }
            if (randomdirection === "left" && ham.x !== 20) {
                numSteps = ((Math.floor(Math.random() * 6)) + 1) * 2;
                stepLeft(numSteps);
            }
            if (randomdirection === "neutral") {
                if (heartstatuscounter === 0) {
                    ham.sprite = grouchy;
                } else {
                    ham.sprite = normal;
                }
                redrawAll();
            }
            if (randomdirection === "lookleft") {
                if (heartstatuscounter === 0) {
                    ham.sprite = grouchy3;
                } else {
                    ham.sprite = sniffleft;
                }
                redrawAll();
            }
            if (randomdirection === "lookright") {
                if (heartstatuscounter === 0) {
                    ham.sprite = grouchy2;
                } else {
                    ham.sprite = sniffright;
                }
                redrawAll();
            }
            if (randomdirection === "back") {
                ham.sprite = back;
                redrawAll();
            }
        }
        randomWalking();
    }, 5000);
};

randomWalking();


let sleeping = function () {
    ham.phase = "sleepy";
    $(".fa").addClass("inactive");
    ham.sprite = sleepy;
    redrawAll();
    let extraSleep = Math.floor(Math.random() * 8000);
    let sleepDuration = 10000;
    setTimeout(function () {
        ham.phase = "sleep";
        ham.sprite = sleep;
        redrawAll();
        for (let c = 0; c < Math.floor((sleepDuration + extraSleep) / 1500); c++) {
            setTimeout(function () {
                if (c % 2 === 0) {
                    redrawAll();
                    ctx.drawImage(zzz, ham.x + 6, (ham.y - 15));
                } else {
                    redrawAll();
                    ctx.drawImage(zzz, ham.x + 6, (ham.y - 20));
                }
            }, 1000 * (c + 1));
        }
    }, 2500)
    setTimeout(function () {
        if (heartstatuscounter !== 4) {
            heartstatuscounter += 1;
            heartstatus = heartsarray[heartstatuscounter];
        }
        ham.phase = "idle";
        $(".fa").removeClass("inactive");
        ham.sprite = wake;
        redrawAll();
    }, (sleepDuration + extraSleep))
}

let randomSleep = function () {
    let timeToSleep = Math.floor(Math.random() * 40000);
    setTimeout(function () {
        if (ham.phase === "idle") {
            sleeping();
            randomSleep();
        }
        else {
            randomSleep();
        }
    }, (20000 + timeToSleep))
}

randomSleep();


let bugEncounter = function () {
    if (bugEncounterRunning === false) {
        redrawAll();
        bugEncounterRunning = true;
        ham.phase = "bug";
        $(".fa").addClass("inactive");
        let bugResponseArray = [gross, shock, scare1];
        let bugArray = [bug1, bug2];
        let randomBug = bugArray[Math.floor(Math.random() * bugArray.length)];
        setTimeout(function () {
            let randomresponse = bugResponseArray[Math.floor(Math.random() * bugResponseArray.length)];
            ham.sprite = randomresponse;
            redrawAll();
            if (heartstatuscounter === 1 || heartstatuscounter === 0) {
                if (heartstatuscounter === 1) {
                    heartstatuscounter -= 1;
                    heartstatus = heartsarray[heartstatuscounter];
                }
                redrawAll();
                confused();
                setTimeout(function () {
                    ham.phase = "idle";
                    $(".fa").removeClass("inactive");
                    ham.sprite = hide;
                    redrawAll();
                    bugEncounterRunning = false;
                }, 4700)
            } else {
                heartstatuscounter -= 1;
                heartstatus = heartsarray[heartstatuscounter];
                redrawAll();
                ctx.drawImage(randomBug, ham.x + 6, (ham.y - 20));
                setTimeout(function () {
                    ham.phase = "idle";
                    $(".fa").removeClass("inactive");
                    ham.sprite = hide;
                    redrawAll();
                    bugEncounterRunning = false;
                }, 2500)
            }
        }, 100)
    }
}

let foodTime = function () {
    if (foodTimeRunning === false) {
        redrawAll();
        foodTimeRunning = true;
        ham.phase = "food";
        $(".fa").addClass("inactive");
        let foodArray = [apple, goldapple, bean1, bean2, bean3, berry1, berry2, berry3, berry4, cd, drink, potion, seed, scarf, shades];
        let randomPosResponseArray = [getfood1, getfood2, getfood3, getfood4, content]
        let randomFood = foodArray[Math.floor(Math.random() * foodArray.length)];
        let randomPosResponse = randomPosResponseArray[Math.floor(Math.random() * randomPosResponseArray.length)];

        setTimeout(function () {
            if (randomFood === goldapple || randomFood === berry4) {
                ham.sprite = happy;
            } else if (randomFood === cd || randomFood === scarf || randomFood === shades) {
                ham.sprite = what;
            } else {
                ham.sprite = randomPosResponse;
            }
            redrawAll();
            ctx.drawImage(randomFood, ham.x + 8, (ham.y - 15));
        }, 100)
        if (randomFood === cd || randomFood === scarf || randomFood === shades) {
            if (heartstatuscounter === 1 || heartstatuscounter === 0) {
                if (heartstatuscounter === 1) {
                    heartstatuscounter -= 1;
                    heartstatus = heartsarray[heartstatuscounter];
                }
                redrawAll();
                setTimeout(function () {
                    confused();
                }, 2000)
            } else {
                setTimeout(function () {
                    ham.sprite = shrug;
                    heartstatuscounter -= 1;
                    heartstatus = heartsarray[heartstatuscounter];
                    redrawAll();
                }, 2500)
                setTimeout(function () {
                    ham.phase = "idle";
                    $(".fa").removeClass("inactive");
                    ham.sprite = normal;
                    redrawAll();
                    foodTimeRunning = false;
                }, 4500)
            }
        } else {
            for (let c = 0; c < 8; c++) {
                setTimeout(function () {
                    if (c % 2 === 0) {
                        ham.sprite = eat1;
                    } else {
                        ham.sprite = eat2;
                    }
                    redrawAll();
                }, 500 * (c + 1) + 2000)
            };
            setTimeout(function () {
                ham.phase = "idle";
                $(".fa").removeClass("inactive");
                ham.sprite = normal;
                if (heartstatuscounter !== 4) {
                    heartstatuscounter += 1;
                    heartstatus = heartsarray[heartstatuscounter];
                }
                redrawAll();
                foodTimeRunning = false;
            }, 6500)
        }
    }
}
