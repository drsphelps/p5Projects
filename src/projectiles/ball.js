
const airRes = 0.995;

class Ball {
    constructor(r, elas, xpos, ypos, xspeed, yspeed) {
        this.radius = r;
        this.elasticity = elas;
        this.pos = {
            x:xpos,
            y:ypos
        };
        this.velocity = {
            x:xspeed,
            y:yspeed
        }
        this.g = 0;
        this.lowBounces = 0;
    }

    draw() {
        fill(this.red, this.green, this.blue);
        ellipse(this.pos.x, this.pos.y, this.radius);
    }

    enableG(t) {
        if (t) {
            this.g=1
            this.lowBounces = 0;
        } else {
            this.g = 0;
        }
    }

    setVel(x,y) {
        this.velocity.x = x;
        this.velocity.y = y;
    }

    update() {
        console.log(this.velocity.y);
        if (this.lowBounces < 25) {                                             
            if (this.pos.y+this.radius/2 >= height) {
                this.lowBounces++;
                this.velocity.y = -(this.elasticity * this.velocity.y);
                this.pos.y += this.velocity.y;
            } else if (this.pos.y-this.radius/2 <= 0) {
                this.velocity.y = -(this.elasticity * this.velocity.y);
                this.pos.y += this.velocity.y;
            } else {
                this.velocity.y += this.g;
                this.pos.y += this.velocity.y;
            }
        } else {
            console.log(1);
            this.pos.y = height
        }

        if (this.pos.x+this.radius/2 >= width || this.pos.x-this.radius/2 <= 0) {
            this.velocity.x = -(this.elasticity * this.velocity.x)
            this.pos.x += this.velocity.x;
        } else {
            this.velocity.x *= airRes;
            this.pos.x += this.velocity.x;
        }

        if (this.pos.x < this.radius/2) {
            this.pos.x = this.radius/2;
        } else if (this.pos.x > width - (this.radius/2)) {
            this.pos.x =  width - (this.radius/2);
        } 

        if (this.pos.y > height - this.radius/2) {
            this.pos.y = height - this.radius/2;
        } else if (this.pos.y - this.radius/2 < 0) {
            this.pos.y = this.radius/2;
        }
    }
}