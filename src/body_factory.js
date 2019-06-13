
function buildStarFromData(StarData){

    range = Math.random();

    name = StarData.name;
    radius = StarData.min_real_rad + (StarData.max_real_rad - StarData.min_real_rad) * range;
    mass = 4/3 * Math.PI * radius*radius*radius * StarData.density;
    temp = StarData.min_temp + (StarData.max_temp - StarData.min_temp) * range;

    star = new Star(name, radius, mass, temp);

    size_mod = (StarData.min_disp_rad + (StarData.max_disp_rad - StarData.min_disp_rad) * range) / radius;

    star.disp_size_mod = size_mod;
    star.pcolor = StarData.pcolor;
    star.scolor = StarData.scolor;
    
    return star;
}

function buildSateliteFromData(SateliteData){

    range = Math.random();

    name = SateliteData.name;
    radius = SateliteData.min_real_rad + (SateliteData.max_real_rad - SateliteData.min_real_rad) * range;
    mass = 4/3 * Math.PI * radius*radius*radius * SateliteData.density;
    temp = SateliteData.min_temp + (SateliteData.max_temp - SateliteData.min_temp) * range;

    satelite = new Satelite(name, radius, mass, temp);

    size_mod = (SateliteData.min_disp_rad + (SateliteData.max_disp_rad - SateliteData.min_disp_rad) * range) / radius;

    satelite.disp_size_mod = size_mod;
    satelite.pcolor = SateliteData.pcolor;
    satelite.scolor = SateliteData.scolor;

    range = Math.random();
    orbit = SateliteData.min_orbit + (SateliteData.max_orbit - SateliteData.min_orbit) * range;
    satelite.r = orbit;

    range = Math.random();
    satelite.phi = range*Math.PI*2;

    range = Math.random();
    velocity = SateliteData.min_vel + (SateliteData.max_vel - SateliteData.min_vel) * range;
    satelite.velocity = velocity;

    return satelite;
}