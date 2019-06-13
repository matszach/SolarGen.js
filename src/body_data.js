// star dictionaries
const BlueStarData = {
    name : 'blue star',
    min_temp : 7500,
    max_temp : 25000,
    min_real_rad : 1750,
    max_real_rad : 4200,
    min_disp_rad : 40,
    max_disp_rad : 60,
    min_mass : 6,
    max_mass : 36,
    pcolor : '#0000ff',
    scolor : '#aaaaff'
}

const YellowStarData = {
    name : 'yellow star',
    min_temp : 5000,
    max_temp : 6500,
    min_real_rad : 1500,
    max_real_rad : 700,
    min_disp_rad : 32,
    max_disp_rad : 38,
    min_mass : 2,
    max_mass : 3,
    pcolor : '#ffff00',
    scolor : '#ffffaa'
}

const RedStarData = {
    name : 'red star',
    min_temp : 3500,
    max_temp : 4500,
    min_real_rad : 650,
    max_real_rad : 350,
    min_disp_rad : 24,
    max_disp_rad : 28,
    min_mass : 0.6,
    max_mass : 1.6,
    pcolor : '#ff0000',
    scolor : '#ffaaaa'
}

function randStarData(){
    var data = [BlueStarData, YellowStarData, RedStarData];
    return data[Math.floor(Math.random()*data.length)]
}

// planet satelite dictionaries
const RockyPlanetData = {
    name : 'rocky planet',
    min_temp : 100,
    max_temp : 700,
    min_real_rad : 2.5,
    max_real_rad : 10,
    min_disp_rad : 10,
    max_disp_rad : 13,
    min_mass : 0.4,
    max_mass : 10,
    pcolor : '#aaaaaa',
    scolor : '#333333',
    min_orbit : 80,
    max_orbit : 300,
    min_vel : 0.002, 
    max_vel : 0.010,
    pop_chance : 0.3,
    min_pop : 1,
    max_pop : 100000000000
}

const IcyPlanetData = {
    name : 'icy planet',
    min_temp : 50,
    max_temp : 250,
    min_real_rad : 2.5,
    max_real_rad : 7,
    min_disp_rad : 9,
    max_disp_rad : 12,
    min_mass : 0.35,
    max_mass : 8,
    pcolor : '#ffffff',
    scolor : '#ccccff',
    min_orbit : 150,
    max_orbit : 300,
    min_vel : 0.002, 
    max_vel : 0.010,
    pop_chance : 0.1,
    min_pop : 1,
    max_pop : 100000000
}

const ForrestPlanetData = {
    name : 'forrest planet',
    min_temp : 290,
    max_temp : 310,
    min_real_rad : 4.5,
    max_real_rad : 10,
    min_disp_rad : 11,
    max_disp_rad : 14,
    min_mass : 2.5,
    max_mass : 10,
    pcolor : '#00ff00',
    scolor : '#0000ff',
    min_orbit : 100,
    max_orbit : 200,
    min_vel : 0.002, 
    max_vel : 0.010,
    pop_chance : 0.7,
    min_pop : 1000000000,
    max_pop : 200000000000
}

function randPlanetData(){
    var data = [RockyPlanetData, IcyPlanetData, ForrestPlanetData];
    return data[Math.floor(Math.random()*data.length)]
}

// moon satelite dictionaries
const RockyMoonData = {
    name : 'rocky moon',
    min_temp : 60,
    max_temp : 400,
    min_real_rad : 0.005,
    max_real_rad : 2.5,
    min_disp_rad : 1,
    max_disp_rad : 5,
    min_mass : 0.0000001,
    max_mass : 0.1,
    pcolor : '#888888',
    scolor : '#111111',
    min_orbit : 20,
    max_orbit : 40,
    min_vel : 0.010, 
    max_vel : 0.030,
    pop_chance : 0.1,
    min_pop : 1,
    max_pop : 1000000000
}

const IcyMoonData = {
    name : 'icy planet',
    min_temp : 50,
    max_temp : 250,
    min_real_rad : 0.005,
    max_real_rad : 2.2,
    min_disp_rad : 1,
    max_disp_rad : 4,
    min_mass : 0.35,
    max_mass : 8,
    pcolor : '#dddddd',
    scolor : '#aaaadd',
    min_orbit : 20,
    max_orbit : 40,
    min_vel : 0.002, 
    max_vel : 0.007,
    pop_chance : 0.02,
    min_pop : 1,
    max_pop : 1000000
}

const ForrestMoonData = {
    name : 'forrest planet',
    min_temp : 290,
    max_temp : 310,
    min_real_rad : 1.5,
    max_real_rad : 2.5,
    min_disp_rad : 2,
    max_disp_rad : 5,
    min_mass : 1,
    max_mass : 3,
    pcolor : '#00dd00',
    scolor : '#0000dd',
    min_orbit : 20,
    max_orbit : 50,
    min_vel : 0.002, 
    max_vel : 0.007,
    pop_chance : 0.2,
    min_pop : 10000000,
    max_pop : 2000000000
}

function randMoonData(){
    var data = [RockyMoonData, IcyMoonData, ForrestMoonData];
    return data[Math.floor(Math.random()*data.length)]
}