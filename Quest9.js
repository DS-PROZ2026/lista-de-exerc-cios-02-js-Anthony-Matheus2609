const prompt = require("prompt-sync")();

let funcionarios = [
    {nome: "Carlos", salario: 2500},
    {nome: "Ana", salario: 4000},
    {nome: "Pedro", salario: 3500},
    {nome: "Julia", salario: 2000}
];

let i = 0;

console.log("Funcionários com salário acima de R$3000:");

while(i < funcionarios.length){

    if(funcionarios[i].salario > 3000){
        console.log(funcionarios[i].nome);
    }

    i++;
}

