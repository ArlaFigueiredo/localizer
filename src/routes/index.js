import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*PÁGINAS*/
import Login from '../pages/login';
import CadastroCliente from '../pages/cadastro-cliente';
import CadastroReserva from '../pages/cadastro-reserva';
import EscolhaReserva from '../pages/escolha-reserva';
import CadastroFuncionario from '../pages/cadastro-funcionario';
import CadastroFornecedor from '../pages/cadastro-fornecedor';
import CadastroVeiculo from '../pages/cadastro-veiculo';
import Home from '../pages/home';


export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/cadastro-cliente' element={<CadastroCliente />} ></Route>
            <Route exact path='/cadastro-reserva/:id' element={<CadastroReserva />} ></Route>
            <Route exact path='/cadastro-funcionario' element={<CadastroFuncionario />} ></Route>
            <Route exact path='/cadastro-fornecedor' element={<CadastroFornecedor />} ></Route>
            <Route exact path='/cadastro-veiculo' element={<CadastroVeiculo />} ></Route>
            <Route exact path='/escolha-reserva' element={<EscolhaReserva />} ></Route>
        </Routes>
    )
}