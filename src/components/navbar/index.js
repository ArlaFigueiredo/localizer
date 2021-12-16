import React from 'react';
import './navbar.css';
import { useSelector} from 'react-redux';

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg">
            <i class="far fa-compass text-white fa-2x"></i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><a className="nav-link ml-2" to="/">Home</a></li> 

                    {           
                        useSelector(state => state.usuarioLogado) > 0 ?                  
                    <>                        
                        <li className="nav-item"><a className="nav-link" >Publicar Evento</a></li> 
                        <li className="nav-item"><a className="nav-link" >Meus Eventos</a></li> 
                        <li className="nav-item"><a className="nav-link" >Sair</a></li> 
                    </>
                    :
                    <>
                    <li className="nav-item"><a className="nav-link" >Cadastrar</a></li> 
                    <li className="nav-item"><a className="nav-link" >Login</a></li> 
                    </>
                    }
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;