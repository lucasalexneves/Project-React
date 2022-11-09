import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';


function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Events test</h1>
      <Evento />
      <Form />
    </div>    
  )
}

export default App;
