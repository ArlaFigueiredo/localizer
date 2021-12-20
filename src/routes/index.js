import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*PÁGINAS*/
import Login from '../pages/login';
import CadastroCliente from '../pages/cadastro-cliente';
import CadastroReserva from '../pages/cadastro-reserva';
import EscolhaReserva from '../pages/escolha-reserva';
import MinhasReservas from '../pages/minhas-reservas';
import GereciaReserva from '../pages/gerencia-reserva';
import CadastroFuncionario from '../pages/cadastro-funcionario';
import CadastroFornecedor from '../pages/cadastro-fornecedor';
import CadastroVeiculo from '../pages/cadastro-veiculo';
import Devolucao from '../pages/devolucao';
import CadastroDespesa from '../pages/cadastro-despesa'
import Home from '../pages/home';
import InspecaoVeiculo from '../pages/inspecao-veiculo';
import RelatorioDespesa from '../pages/relatorio-despesas'
import RelatorioReceita from '../pages/relatorio-receita'


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
            <Route exact path='/minhas-reservas' element={<MinhasReservas />} ></Route>
            <Route exact path='/gerencia-reserva' element={<GereciaReserva />} ></Route>
            <Route exact path='/devolucao' element={<Devolucao />} ></Route>
            <Route exact path='/inspecao' element={<InspecaoVeiculo />} ></Route>
            <Route exact path='/cadastro-despesa' element={<CadastroDespesa />} ></Route>
            <Route exact path='/relatorio-despesa' element={<RelatorioDespesa />} ></Route>
            <Route exact path='/relatorio-receita' element={<RelatorioReceita />} ></Route>
        </Routes>
    )
}