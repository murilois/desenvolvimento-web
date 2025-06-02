import './App.css'

// 1 - Componente básico
import PrimeiroComponent from './components/PrimeiroComponent.jsx'

// 2 - JS no JSX
import JSXComponent from './components/JSXComponent.jsx'

// 3 - Componente hierárquico
import HierarquiaComponent from './components/HierarquiaComponent.jsx'

// 4 - Eventos
import EventosComponent from './components/EventosComponent.jsx'

function App() {
  return (
      <div className="App">
        <h1>1 - Componente básico</h1>
        <PrimeiroComponent/>

        <h1>2 - JS no JSX</h1>
        <JSXComponent/>

        <h1>Componente hierárquico</h1>
        <HierarquiaComponent/>

        <h1>Eventos on click</h1>
        <EventosComponent/>
      </div>
  )
}

export default App
