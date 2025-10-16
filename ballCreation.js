//looped to create ballsAmount # of balls
function createBall() {
    dx = random(50, 70);
    dy = dx;
    
    r1 = random(0, 255);
    r2 = random(0, 255);
    r3 = random(0, 255);

    col = color(r1, r2, r3);

    bxv = (random(-50, -30) + random(30, 50)) / 2;
    byv = (random(-50, -30) + random(30, 50)) / 2;

    let bx = random(0 + dx, width - dx);
    let by = random(0 + dy, height - dy);

    if(i !== 0) {
        for(let j = 0; j < balls.length; j++) {
            if(dist(bx, by, balls[j].x, balls[j].y) - dx - 20 < 0) {
                bx = random(0 + dx / 2, width - dx / 2);
                by = random(0 + dy / 2, height - dy / 2);
                
                j = -1;
            }
        }
    }
    
    totalBalls++;
    index++;
    
    balls[i] = new Ball(bx, by, dx, dy, bxv, byv, col, index);
}

//creates ball at mouse location (on click)
function customBall() {
    dx = 50;
    dy = dx;

    r1 = random(0, 255);
    r2 = random(0, 255);
    r3 = random(0, 255);

    col = color(r1, r2, r3);

    bxv = (random(-50, -30) + random(30, 50)) / 2;
    byv = (random(-50, -30) + random(30, 50)) / 2;

    bx = mouseX;
    by = mouseY;

    totalBalls++;
    
    balls[i] = new Ball(bx, by, dx, dy, bxv, byv, col);
}