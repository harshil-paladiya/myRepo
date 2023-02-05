function Circle(){
    this.radius = 1;

    // private property
    let center = {x : 0, y : 0};

    this.draw = function(){
        console.log("draw");
    }

    function getCenter(){
        return center;
    }

    Object.defineProperty(this, 'center', {
        get: function(){
            return center;
        },

        set: function(value){
            center = value;
        }
    });
}

const circle = new Circle();
console.log(circle.center);
circle.center = {x: 1, y:1};
console.log(circle.center);

