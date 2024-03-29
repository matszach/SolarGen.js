// html elements
const ctx = document.getElementById("main_cvs").getContext('2d');

function drawBackground(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,cvs_side,cvs_side);
    ctx.fillStyle = '#ffffff';
}

let central_body;

function init(){
    central_body = buildStarFromData(randStarData());

    nof_planets = Math.random()*4 + 5;

    for(i=0; i<nof_planets; i++){

        pl = buildSateliteFromData(randPlanetData());
        // pl.r = i * 30 + 90
        central_body.satelites.push(pl);

        nof_moons = Math.random()*5 - 2;

        for(j=0; j<nof_moons; j++){
            mn = buildSateliteFromData(randMoonData());
            // mn.r = j * 10 + 20
            pl.satelites.push(mn);
        }
    }
}


function main(){
    drawBackground();
    central_body.draw();
    central_body.handle_satelites();
}

init();
setInterval(main, 50);