import React from 'react'
import { useState } from 'react' 
import { UserOutlined, SolutionOutlined} from '@ant-design/icons'
import Mapa from './Mapa'

let mapaDato

const infoMapa = (info) => {
    //console.log(info)
    mapaDato = info
}


const Formulario = ({adicionar}) => {

  const [user, setUser] = useState("");
  const [radicationNumber, setRadNum] = useState("");

  const paraAdicionar = (e) => {
    e.preventDefault()
    
    if(!user || !radicationNumber)
    {
      alert('Por favor adicione la información en todos los campos')
      return
    }

    const usuario = user
    const numeroRadicado = radicationNumber

    adicionar( {usuario, numeroRadicado, mapaDato})
    
    //luego que lo adicione borra la información en los input del UI
    setUser('')
    setRadNum('')
    
}


  return (
    <>
    <h4>Formulario</h4>
    <form className='add-form' onSubmit={paraAdicionar}> 
    <div
            className="row justify-content-center mt-5 bg-light"
        >
            <div className="col-lg-6 text-center ">
                <div class="card">
                    
                    <div className="card-body">
                        
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text">
                                        <UserOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                                    </span>
                            </div>
                            <input
                                name=""
                                className="form-control"
                                placeholder="Usuario institucional"
                                type="text"
                                value={user}
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <SolutionOutlined style={{ fontSize: '24px', color: '#08c' }}/>
                                </span>
                            </div>
                            <input
                                name=""
                                className="form-control"
                                placeholder="Num. radicado de salida"
                                type="number"
                                min="10000000"
                                max="10000000000"
                                value={radicationNumber}
                                onChange={(e) => {
                                    setRadNum(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="card-body">
                                <Mapa datosMapa = {infoMapa}                                        
                                />
                    </div>
                    

                    <div className="card-body">
                        
                        <input type='submit' 
                               value='Continuar'  
                               className='btn btn-primary btn-block'         
                        /> 
                        </div>
                    </div>                    
            </div>
        </div>
    </form>
</>
  )
}

export default Formulario