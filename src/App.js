import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './pages/Formulario'


function App() {

  const adicionarDatos =  (datos) => {

  	console.log(datos)

     
  }

  return (
    <div className="App">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        ahhhhhhhhhhhhhhhh
        <Formulario adicionar={adicionarDatos}/>
      <Footer/>
    </div>
  );
}

export default App;
