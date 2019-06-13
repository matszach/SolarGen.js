
// parent class to all celestial bodies
class CelestialBody{

    constructor(type, radius, mass, temp){

        // body info
        this.type = type;           
        this.radius = radius; // [10^6 m]
        this.mass = mass; // [10^24 kg] for satelites, [10^30 kg] for stars
        this.temp = temp; // [K]

        // body display
        this.disp_size_mod = 1; // displayed size modfier (display is not to scale)
        this.pcolor = '#ff0000';
        this.scolor = '#ffaa00';

        // absolute location
        this.x = 0;
        this.y = 0;

        // list of body's satelites
        this.satelites = [];

    }

    move(prim_x, prim_y){
        console.log('superclass\'s move() called');
    }

    draw(){
        ctx.beginPath();
        var grd = ctx.createLinearGradient(
            cvs_side/2 + this.x - this.radius*this.disp_size_mod,
            cvs_side/2 + this.y - this.radius*this.disp_size_mod,
            cvs_side/2 + this.x + this.radius*this.disp_size_mod,
            cvs_side/2 + this.y + this.radius*this.disp_size_mod);
        grd.addColorStop(0, this.pcolor); 
        grd.addColorStop(1, this.scolor); 
        ctx.fillStyle = grd;
        ctx.arc(cvs_side/2+this.x, cvs_side/2+this.y, this.radius*this.disp_size_mod, 0, 2 * Math.PI);
        ctx.fill();
    }

    handle_satelites(){
        this.satelites.forEach(s => {
           s.move(this.x, this.y);
           s.draw();
           s.handle_satelites();
        });
    }

}

// primary star of the system
class Star extends CelestialBody{

    constructor(type, radius, mass, temp){

        // super constructor
        super(type, radius, mass, temp);
    }

}

// planets and moons
class Satelite extends CelestialBody{

    constructor(type, radius, mass, temp){

        // super constructor
        super(type, radius, mass, temp);

        // relative location (from it's primary)
        this.r = 0;
        this.phi = 0;

        // other
        this.velocity = 0.01; // [rad/frame]
        this.population = 0;

    }

    move(prim_x, prim_y){
        this.phi += this.velocity;
        this.x = prim_x + this.r * Math.cos(this.phi);
        this.y = prim_y + this.r * Math.sin(this.phi);
    }
}
