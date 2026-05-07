const prompt = require("prompt-sync")();

let frota = [
    {modelo: "Volvo", km: 12000, revisao: 5},
    {modelo: "Scania", km: 8000, revisao: 8},
    {modelo: "Mercedes", km: 5000, revisao: 3}
];

let frotaManutencao = [];

for(let i = 0; i < frota.length; i++){

    if(frota[i].km > 10000 || frota[i].revisao > 6){
        frotaManutencao.push(frota[i]);
    }
}

console.log("Veículos que precisam de manutenção:");

for(let i = 0; i < frotaManutencao.length; i++){
    console.log(frotaManutencao[i].modelo);
}

console.log("Total:", frotaManutencao.length);

