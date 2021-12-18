import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './sidebar.css';

function Sidebar() {

    const dispatch = useDispatch();

    return (
        
        <nav class="navbar navbar-expand-md navbar-dark fixed-left">
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"></a>
                    </li>
                    {           
                        useSelector(state => state.usuarioPrivilege) === "CLIENTE" ?                  
                    <>                        
                    <li class="nav-item">
                        <a class="nav-link">Reservar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Minhas Reservas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Meus Débitos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Comprovantes</a>
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