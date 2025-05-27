// 1 - Selecionar os elementos
// Utilizar const pois eles serão selecionados apenas uma vez
const formDiv = document.querySelector("#top-form");
const numberFrom = document.querySelector("#number-from");
const numberTo = document.querySelector("#number-to");
const tabuadaOperations = document.querySelector("#tabuada-operations-container");
const tabuadaTitle = document.querySelector("#tabuada-title span");
// 3 - Cria a tabuada
// Ele está aqui pois a função createTable recebe consts e só pode ser chamada depois de ser declarada
const createTable = (numberFromValue, numberToValue) =>{
    tabuadaOperations.innerHTML = "";

    // Quantas vezes teremos de imprimir essa tabuada?
    // Ela será imprimida até "numberToValue"
    for (let i = 0; i <= numberToValue; i++){
        const result = numberFromValue * i;

        const template = `
        <div class="row">
            <div class="operation">${numberFromValue} x ${i} = </div>
            <div class="result">${result}</div>
        </div>
        `
        
        const parser = new DOMParser(); // Responsável por parsear uma string para HTML, o que é Parsear? Transformar um texto em algo que o computador entenda.
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        tabuadaOperations.appendChild(row);
    }

    tabuadaTitle.innerHTML = numberFromValue;
}
// 2 - Eventos
formDiv.addEventListener("submit", (e) => {
    e.preventDefault();

    const numberFromValue = +numberFrom.value; // 0 + na frente do "elemento.value" serve para transformar em decimal
    const numberToValue = +numberTo.value;

    if(!numberFromValue || !numberToValue)
        return;
    console.log(numberFromValue, numberToValue);
    createTable(numberFromValue, numberToValue);
})