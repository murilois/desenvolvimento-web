import React from 'react' //Hoje em dia esse import já n é mais necessário
// Código JSX só tem um pai
import HierarquiaComponent from './HierarquiaComponent'
const PrimeiroComponent = () => {
  return ( //O React entende que ele está retornando um objeto
    <div>
        <p>Nosso PRIMEIRO componente!!!</p>
        <HierarquiaComponent/>
    </div>
  )
}

export default PrimeiroComponent