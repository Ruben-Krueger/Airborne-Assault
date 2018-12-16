class Building {


    constructor(x, width, height) {

        this.x = x;
        this.width = width;
        this.height = height;
        this.speed = 1;

    }

    update() {
        this.x -= this.speed;
        if(this.x + this.width < 0) {
            this.x = window.innerWidth;
        }

    }

    render() {
        rect(this.x, window.innerHeight - this.height, this.width, window.innerHeight)
    }

}