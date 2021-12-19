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
                        <Link to='/escolha-reserva' className="nav-link">Reservar</Link>
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
                    <li className="nav-item"><Link  className="nav-link" to="/" >Gerenciar Reservas</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-veiculo" >Cadastrar Veiculo</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/" >Editar Veiculo</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/" >Checklist Devolução</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-fornecedor" >Cadastrar Fornecedor</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/" >Relatório Receitas</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/" >Relatório Despesas</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-funcionario" >Cadastrar Funcionário</Link ></li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;