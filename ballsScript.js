let balls = [];
let width, height;
let ballAmount = 20;
let totalBalls = 0;
let customBallAmount = 0;
let textCol;
let index = -1;
let counter = -1;
let frame;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    textCol = color(random(0, 255), random(0, 255), random(0, 255));
    
    //cols = 0;
    
    width = windowWidth;
    height = windowHeight;
    
    for(i = 0; i < ballAmount; i++) {
        createBall();
    }
    
}

function draw() {
    background(51);
    frame++;
    
    for(i = 0; i < balls.length; i++) {
        balls[i].make();
        balls[i].detect();
        balls[i].move();
        //loop to be used to detect ball-ball collision
        for(j = 0; j < balls.length; j++) {
            if(i != j && balls[i].intersects(balls[j])) {
                reviseCollision(balls[i], balls[j]);
            }
        }
    }
    
    textSize(50);
    fill(textCol);
    text(ballAmount + " default balls", 0, 50);
    text(customBallAmount + " custom balls", 0, 100);
    text(totalBalls + " total balls", 0, 150);
}

function mouseClicked() {
    customBall();
    customBallAmount++;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    width = windowWidth;
    height = windowHeight;
}

function reviseCollision(firstBall, secondBall) {
    let newXVel1 = (firstBall.xvel * (firstBall.mass - secondBall.mass) + (2 * secondBall.mass * secondBall.xvel)) / (firstBall.mass + secondBall.mass);
    let newYVel1 = (firstBall.yvel * (firstBall.mass - secondBall.mass) + (2 * secondBall.mass * secondBall.yvel)) / (firstBall.mass + secondBall.mass);
    let newXVel2 = (secondBall.xvel * (secondBall.mass - firstBall.mass) + (2 * firstBall.mass * firstBall.xvel)) / (firstBall.mass + secondBall.mass);
    let newYVel2 = (secondBall.yvel * (secondBall.mass - firstBall.mass) + (2 * firstBall.mass * firstBall.yvel)) / (firstBall.mass + secondBall.mass);
    
    firstBall.xvel = newXVel1;
    firstBall.yvel = newYVel1;
    secondBall.xvel = newXVel2;
    secondBall.yvel = newYVel2;
    
    firstBall.x = firstBall.x + newXVel1;
    firstBall.y = firstBall.y + newYVel1;
    secondBall.x = secondBall.x + newXVel2;
    secondBall.y = secondBall.y + newYVel2;
}