class Cloud {


    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(0.8, 1.3);
        this.speed = 2;

    }


    update() {
        this.x -= this.speed;
        if(this.x + this.size*20 < 0) {
            this.x = window.innerWidth;
            this.y = random() >= 0.5 ? this.y + 5 : this.y - 5;
        }

    }

    render() {
        fill(255, 255, 255);
        noStroke();
        arc(this.x, this.y, 25 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
        arc(this.x + 10, this.y, 25 * this.size, 45 * this.size, PI + TWO_PI, TWO_PI);
        arc(this.x + 25, this.y, 25 * this.size, 35 * this.size, PI + TWO_PI, TWO_PI);
        arc(this.x + 40, this.y, 30 * this.size, 20 * this.size, PI + TWO_PI, TWO_PI);
    }


}