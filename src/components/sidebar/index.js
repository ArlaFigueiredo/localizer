import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './sidebar.css';

function Sidebar() {

    const dispatch = useDispatch();

    return (
        
        <nav className="navbar navbar-expand-md navbar-dark fixed-left">
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    {           
                        useSelector(state => state.usuarioPrivilege) === "CLIENTE" ?                  
                    <> 
                    <li className="nav-item">
                        <Link to='/cadastro-reserva' className="nav-link">Reservar</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Minhas Reservas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Meus Débitos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Comprovantes</a>
                    </li>
                    </>
                    :
                    <>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-cliente" >Gerenciar Reservas</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Cadastrar Veiculo</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Editar Veiculo</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Checklist Devolução</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Cadastrar Fornecedor</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Cadastrar Funcionário</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Relatório Receitas</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/login" >Relatório Despesas</Link ></li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;