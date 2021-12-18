import React from 'react';
import './navbar.css';
import { useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

function Navbar(){

    const dispatch = useDispatch();
    const userEmail = useSelector(state => state.usuarioEmail);

    return(
        <nav className="navbar navbar-expand-lg">
            <i className="far fa-compass text-white fa-2x"> Localizer</i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link ml-2" to="/">Home</Link></li> 

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <li className="nav-item ms-6"><button  className="btn btn-outline-light ml-5" onClick={() => dispatch({type: 'LOG_OUT'})   }>Sair</button ></li> 
                        <li><button  className="btn btn-outline-light ml-2" disabled>{userEmail}</button ></li>
                    </>
                    :
                    <>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-cliente" >Cadastrar</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Login</Link ></li> 
                    </>
                    }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;