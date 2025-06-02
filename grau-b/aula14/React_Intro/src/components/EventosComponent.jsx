import React from 'react'

const EventosComponent = () => {
  
    const handleClick = (e) =>{
        console.log("Clicaram numa função nomeada, chamada de handleClick");
        console.log(e);
    };
    const renderSomeElement = (x, y)=>{
        if(x>y){
            return <h2>{x} é maior que {y}</h2>
        }
        else{
            return <h3>{x} é menor que {y}</h3>
        }
    }
    return (
    <div>
        <div>
            <button onClick={()=> console.log("Clicaram no primeiro botão!")}>Clique aqui!</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique em mim</button>
        </div>

        {/*Abaixo, segue a sintaxe de como invocamos uma função DENTRO do JSX */}
        {renderSomeElement(10, 0)}

        {renderSomeElement(3,10)}
    </div>
  )
}

export default EventosComponent