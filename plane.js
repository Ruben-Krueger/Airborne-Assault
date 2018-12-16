class Plane {


    render() {
      	noStroke();
      
      	// body
        rect(this.x, this.y, this.bodyLength, this.bodyHeight);
      	
        // tail
        triangle(this.x, this.y, this.x, this.y - this.tailHeight,
                this.x + this.tailLength, this.y);
      
        // wing
        triangle(this.x + 15, this.y + this.bodyHeight, this.x, this.y + this.bodyHeight + this.wingHeight,
                this.x + this.wingLength + 20, this.y + this.bodyHeight);
      
    }
  
  	bomb() {
      
      
    }
  
  

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.bodyHeight = 20;
        this.bodyLength = 60;
          
        this.tailHeight = 20;
        this.tailLength = 10;
      
      	this.wingHeight = 30;
        this.wingLength = 20;


    }


}