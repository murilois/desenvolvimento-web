// Criar função para receber as informações
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/murilois/desenvolvimento-web/refs/heads/master/portfolio/data/profile.json' //Link do arquivo JSON Raw no repositório do GitHub
    const response = await fetch(url); // Aguarda o fetch do url
    return await response.json() // Retorna a resposta do link e transforma em json
}
