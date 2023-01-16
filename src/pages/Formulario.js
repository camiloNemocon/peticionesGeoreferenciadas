import React from 'react'
import { useState } from 'react' 
import { UserOutlined} from '@ant-design/icons'

const Formulario = ({adicionar}) => {

  const [user, setUser] = useState("");

  const paraAdicionar = (e) => {
    e.preventDefault()
    
    if(!user )
    {
      alert('Por favor adicione la información en todos los campos')
      return
    }

    const usuario = user

    adicionar( {usuario})
    
    //luego que lo adicione borra la información en los input del UI
    setUser('')
    
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