// 1 - Variáveis
/*
let idade = 34;
const nome = "Dio";
console.log(`O ${nome} tem ${idade} anos.`);
*/

// 2 - Variáveis em sequência
/*
let a = 10, b = 20, c = 30;
console.log(a,b,c);
*/

// 3 - Função de prompt p/ receber dados do usuário
// Pouco utilizada, pois seu layout não é customizável
/*
const sobrenome = prompt("Digite seu sobrenome: ");
console.log(`Seu sobrenome é ${sobrenome}`);

// 4 - Alert
alert("Bem vindo ao site todo branco");
*/

// 5 - Math
/*
console.log(Math.max(35, -110, 99));
console.log(Math.min(35, -110, 99));
console.log(Math.round(3.14));
console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));

// 6 - Funções do console
console.error("Essa tua função tá ruim piá! >:(");
console.warn("Essa tua função pode dar problema mais adiante... :|");
*/

// 7 - Repetições
/*
let i = 1;
while (i <= 5) {
    console.log(`Loop do while de número ${i} de 5...`);
    i++;
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i}`);
}*/

// FUNÇÕES
// 8 - Função simples
/*
function minhaFuncao() {
    console.log("Testando minha função");
}
minhaFuncao();
minhaFuncao();
*/

// 9 - Função anônima dentro de uma variável
/*
const minhaFuncaoDentroDeVariavel = function() {
    console.log("Func dentro de variável");
};
minhaFuncaoDentroDeVariavel();
minhaFuncaoDentroDeVariavel();
*/

// 10 - Função com argumentos
/*
function somaValores(val1, val2) {
    return val1 + val2;
}
console.log(somaValores(10, 15));
*/

// 12 - Arrow functions - Muito utilizada em frameworks
/**
 * Forma de criar funções anônimas.
 * São ideais p/ escrever com menor número de linhas.
 * São boas qnd desejamos passar funções como argumento
 */
/*
// Versão sem argumentos
const testaArrow = () => {
    console.log("Primeira arrow function...");
};
testaArrow();

// Versão com argumentos
const parOuImpar = (n) => {
    if (n % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
};
parOuImpar(11);
parOuImpar(48);
*/

// 13 - Simplificando arrow functions, útil para funcs pequenas
// Permite omitir as chaves e returns
/*
// Versão sem argumento
const dizOlaMundo = () => console.log("Olá mundo");
dizOlaMundo();

// Versão com argumento
const aoQuadrado = (x) => x * x;
console.log(aoQuadrado(11));
*/

// 14 - Funções com argumentos de valor default
/*
const saudaUsuario = (usuario, sauda = "Olá") => {
    return `${sauda}, ${usuario}!`;
};
console.log(saudaUsuario("Dio"));
console.log(saudaUsuario("Dio", "Boa noite"));

const repeteTexto = (texto, repete = 2) => {
    for (let i = 0; i < repete; i++)
        console.log(texto);
};
repeteTexto("hue");
repeteTexto("hue", 154);
*/

// ARRAYS
// 16
/*
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof(lista));

const listaAleatoria = [true, 3.13, "m", 124, false, false, 999.1];
*/

// 17 - Arrays propriedades
/*
const numeros = [5, 9, 1];
console.log(numeros.length);
const minhaString = "Lálálálá lálá";
console.log(minhaString.length);
*/

// 18 - Arrays acessando elementos
/*
const alfa = ["a", "b", "c", "d"];
console.log(alfa[0]);
console.log(alfa[3]);
console.log(alfa[5]);
*/

// 19 - Concatenando arrays
/*
const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];
const a3 = a1.concat(a2);
console.log(a3);
*/

// 20 - Object Literals
/**
 * São semelhantes às structs do C. Ou a objetos normais,
 * porém sem uma classe, e sem potencial de herança e polimorfismo
 */
/*
const pessoa = {
    nome: "Fulano",
    sobrenome: "Da Silva",
    profissao: "Programador",
    idade: 19,
};
console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.sobrenome.length);
*/

// 21 - Object Literals - Adicionar/Remover propriedades

const carro = {
    motor: 2.4,
    marca: "Ferrari",
    modelo: "SF290",
    km: 0,
};


/*
carro.portas = 2;
console.log(carro);
delete carro.km;
console.log(carro);
*/

// 22 - Object Literals - Copiando propriedades de um object
/*
const monetario = {
    moeda: "Real",
    custo: 7300000,
};

Object.assign(carro, monetario);
console.log(carro);
*/

// 23 - Object Literal - Inspecionando propriedades
// Retorna um array contendo as chaves do objeto
/*
console.log(Object.keys(carro));
// Retorna arrays de arrays, com chave/valor
console.log(Object.entries(carro));
*/

// 24 - Arrays - Inserindo e removendo no fim com push e pop
/*
const arrayP = [10, 20, 30, 40];
arrayP.push(50, 60, 70);
console.log(arrayP);
arrayP.pop(); 
console.log(arrayP);

// 25 - Arrays - Inserindo e removendo do fim com unshift e shift
arrayP.unshift(-10, 0);
console.log(arrayP);
arrayP.shift();
console.log(arrayP);
*/

// 26 - foreach - No JS, é um método q recebe como parâmetro uma arrow function
/*
const nums = [10, 20, 30, 40];
nums.forEach((numero) => {
    console.log(`O número ${numero} dobrado é ${numero*numero}`);
});

// Exemplo mais realista simulando um retorno de API
const posts = [
    {title: "Aprendendo JS", tag: "JS"},
    {title: "Usando Perl para parsing", tag: "Perl"},
    {title: "PHP para backends terríveis", tag: "SOS"},
];
posts.forEach((post) => {
    console.log(`Exibindo o post ${post.title} - TAG: ${post.tag}`);
});
*/

// 27 - Arrays - Includes
/*
const nums = [1, 2, 3, 4];
console.log(nums.includes(3));
console.log(nums.includes(30));
*/

// 28 - padStart e padEnd
/*
const start = "1";
console.log(start.padStart(4, "0"));
console.log(start.padEnd(10, "0"));
*/

// 29 - Destructuring em objetos
// Transforma propriedades de um obj em múltiplas variáveis
/*
const detalhes = {
    nome: "Dio",
    sobrenome: "Goldoni",
    profissao: "Prof.",
};
const {nome: primeiroNome, sobrenome, profissao} = detalhes;
console.log(primeiroNome);
*/

// 30 - Rest Operator ...
// permite receber uma quantia indefinida de argumentos
/*
const somaInfinita = (...parametros) => {
    let total = 0;
    for (let i = 0; i < parametros.length; i++)
        total += parametros[i];

    return total;
};
console.log(somaInfinita(1, 2, 3, 4, 5));
console.log(somaInfinita(10, -2, "jiejiejiejiejije"));
console.log(somaInfinita(10, -20, -319, 10, 93, 15, 1.93));
*/

// 31 - for...of
// Baseia o número de repetições no array utilizado
/*
const somaInfinita2 = (...argumentos) => {
    let total = 0;
    for (num of argumentos)
        total += num;
    
    return total;
};
console.log(somaInfinita2(1, 2, 3));
*/

// 32 - JSON
/**
 * Utilizado p/ comunicação entre APIs e o front-end
 * Normalmente, não se cria JSON na mão, apenas se recebe e trafega
 * Precisa sempre ser convertido p/ object literal
 */
const meuJSON = '{"name": "Dio", "age": 34, "job": "teacher", "skills": ["Python", "R", "SQL", "Java"]}';

// Conversão do String JSON para objeto
const objetoDio = JSON.parse(meuJSON);
console.log(objetoDio);
console.log(objetoDio.name);
console.log(objetoDio.skills[1]);

// Conversão de objeto para String JSON
const stringDio = JSON.stringify(objetoDio);
console.log(stringDio);