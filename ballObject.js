function Ball(x, y, dx, dy, xvel, yvel, col, index) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.xvel = xvel;
    this.yvel = yvel;
    this.col = col;
    this.index = index;
    this.mass = this.dx * this.dx;
    let acc = 0.5;
    
    let tx, ty, tdx;
    
    this.make = function() {
        fill(this.col);
        noStroke();
        ellipse(this.x, this.y, this.dx, this.dy);
    }
    
    this.move = function() {
        this.x += this.xvel;
        this.y += this.yvel;
    }
    
    this.detect = function() {
        
        if(this.x > width - (this.dx / 2)) {
            this.xvel *= -1;
            this.col = color(random(255), random(255), random(255));
        }
        if(this.x < 0 + (this.dx / 2)) {
            this.xvel *= -1;
            this.col = color(random(255), random(255), random(255));
        }
        if(this.y > height - (this.dy / 2)) {
            this.yvel *= -1;
            this.col = color(random(255), random(255), random(255));
        }
        if(this.y < 0 + (this.dy / 2)) {
            this.yvel *= -1;
            this.col = color(random(255), random(255), random(255));
        }
    }
    
    this.intersects = function(other) {
        
        let d = dist(this.x, this.y, other.x, other.y);
        
        if(d < this.dx / 2 + other.dx / 2) {
            return true;
        }
        else {
            return false;
        }
        
    }
    
    this.colChange = function() {
        this.col = color(random(255), random(255), random(255));
    }
    
}