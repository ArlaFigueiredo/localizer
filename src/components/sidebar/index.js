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
                        <Link to='/minhas-reservas' className="nav-link">Minhas Reservas</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Comprovantes</a>
                    </li>
                    </>
                    :
                    <>
                    <span className="badge bg-danger mt-2 mb-2">Locações</span>
                    <li className="nav-item"><Link  className="nav-link" to="/gerencia-reserva" >Gerenciar Reservas</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/emissao-contrato" >Emissão de Contrato</Link ></li> 
                    
                    <span className="badge bg-danger mt-2 mb-2">Devoluções</span>
                    <li className="nav-item"><Link  className="nav-link" to="/listagem-devolucao" >Cadastrar Devolução</Link ></li> 
                    <li className="nav-item"><Link  className="nav-link" to="/inspecao" >Inspeção</Link ></li> 
                    
                    <span className="badge bg-danger mt-2 mb-2">Lançamentos</span>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-despesa" >Lançamento Despesas</Link ></li>
                    
                    <span className="badge bg-danger mt-2 mb-2">Relatórios</span>
                    <li className="nav-item"><Link  className="nav-link" to="/relatorio-receita" >Relatório Receitas</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/relatorio-despesa" >Relatório Despesas</Link ></li>
                    
                    <span className="badge bg-danger mt-2 mb-2">Cadastros</span>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-veiculo" >Cadastrar Veiculo</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-fornecedor" >Cadastrar Fornecedor</Link ></li>
                    <li className="nav-item"><Link  className="nav-link" to="/cadastro-funcionario" >Cadastrar Funcionário</Link ></li>
                    </>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;