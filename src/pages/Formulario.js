import React from 'react'
import { useState } from 'react' 

const Formulario = ({adicionar}) => {

  const [name, setName] = useState("");

  const paraAdicionar = (e) => {
    e.preventDefault()
    
    if(!name )
    {
      alert('Por favor adicione la información en todos los campos')
      return
    }

    const nombre = name

    adicionar( {nombre})
    
    //luego que lo adicione borra la información en los input del UI
    setName('')
    
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
                               
                            </div>
                            <input
                                name=""
                                className="form-control"
                                placeholder="Nombre completo"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
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