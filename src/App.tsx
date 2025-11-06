import './App.css'
import Campo from './Campo'
import Jogador from './Jogador'

function App() {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0a0a0a', padding: '10px'}}>
      <Campo>
        <div style={{display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
          <Jogador nome="Cássio" posicao="GOL" nota={7.2} preco={6.8} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
          <Jogador nome="Wesley" posicao="LAT" nota={6.5} preco={5.2} />
          <Jogador nome="Léo Ortiz" posicao="ZAG" nota={7.2} preco={7.8} />
          <Jogador nome="João Marcelo" posicao="ZAG" nota={6.8} preco={5.5} />
          <Jogador nome="Alex Sandro" posicao="LAT" nota={6.3} preco={4.2} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
          <Jogador nome="Matheus Henrique" posicao="VOL" nota={7.1} preco={7.5} />
          <Jogador nome="De la Cruz" posicao="MEI" nota={8.1} preco={12.4} />
          <Jogador nome="Matheus Pereira" posicao="MEI" nota={8.3} preco={13.2} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', gap: '12px', flexWrap: 'wrap'}}>
          <Jogador nome="Gabriel Veron" posicao="ATA" nota={6.7} preco={6.9} />
          <Jogador nome="Pedro" posicao="ATA" nota={8.5} preco={15.8} />
          <Jogador nome="Lautaro Díaz" posicao="ATA" nota={7.0} preco={8.3} />
        </div>
      </Campo>
    </div>
  )
}

export default App
