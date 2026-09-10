/* const anthoiny = 'gatão';
var x;
const ValorInteiro = 10;
console.log(typeof ValorInteiro);
console.log(typeof anthoiny);
let DoisValores = (20,30);
console.log(Sum(DoisValores));
let f = (3 * x) - 15
let fdx = ((-1) * (-1)) - 4 * (-1) * 5; */

const nome = prompt("digtite seu nome")
const idade = prompt("digite sua idade:")
console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`)

// função flecha baby
const somar = (a,b) => {
    return a + b
}




// função normal, "emoji de nojinho" bleh


function somar(a,b) {
    return a + b;
}

const nome = prompt("Digite o nome do produto:")
const preco = prompt(parseInt("Digite o preço do produto:"))
const PDD = prompt(parseInt("Digite o desconto do produto:"))
const trans = (PDD / 100)

const desconto = (preco,PDD) => {
    return console.log(`O ${nome} já descontado fica ${preco * trans}`)
}

