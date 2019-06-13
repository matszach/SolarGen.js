
let central_body;

function init(){
    central_body = buildStarFromData(randStarData());

    nof_planets = Math.random()*4 + 5;

    for(i=0; i<nof_planets; i++){

        pl = buildSateliteFromData(randPlanetData());
        central_body.satelites.push(pl);

        nof_moons = Math.random()*6 - 3;

        for(j=0; j<nof_moons; j++){
            mn = buildSateliteFromData(randMoonData());
            pl.satelites.push(mn);
        }
    }
}


function main(){
    clearCanvas();
    drawBackground();
    central_body.draw();
    central_body.handle_satelites();
}

init();
setInterval(main, 50);