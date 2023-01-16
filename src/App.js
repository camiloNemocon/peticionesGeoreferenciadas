import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Formulario from './pages/Formulario'
import { BrowserRouter , Route, Routes } from 'react-router-dom' 


function App() {

  const adicionarDatos =  (datos) => {

  	console.log(datos)

     
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route
            path='/' element={<Formulario adicionar={adicionarDatos}/>} 
          />   
       </Routes>
       <Footer/>
      </div>
     </BrowserRouter>
  );
}

export default App;
