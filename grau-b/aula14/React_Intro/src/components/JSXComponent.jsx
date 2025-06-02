import React from 'react'
import HierarquiaComponent from './HierarquiaComponent';

const JSXComponent = () => {
    
    // Este é um comentário JS PADRÃO...
    const nome = "Fulano de Tal";
    const dados = {
        idade: 34,
        profissao: "Desenvolvedor Fullstack",
    };

    return (
    <div>
        {/*Tudo dentro desta tag é um comentário dentro de JSX*/ }
        <p>Bem vindo {nome}! Você aparenta ser um {dados.profissao} e ter em torno de {dados.idade} anos de idade</p>
        <p>A soma de 2 + 349 é: {2+349}</p>
        <HierarquiaComponent/>
    </div>
  )
}

export default JSXComponent