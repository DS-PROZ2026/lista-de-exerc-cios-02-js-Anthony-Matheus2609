const prompt = require("prompt-sync")();

let estoque = [
    {produto: "Mouse", quantidade: 10},
    {produto: "Teclado", quantidade: 5},
    {produto: "Monitor", quantidade: 7},
    {produto: "Headset", quantidade: 3}
];

let total = 0;

for(let i = 0; i < estoque.length; i++){

    total += estoque[i].quantidade;
}

console.log("Quantidade total em estoque:", total);

