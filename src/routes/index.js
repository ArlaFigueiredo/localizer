import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*PÁGINAS*/
import Login from '../pages/login';
import CadastroCliente from '../pages/cadastro-cliente';
import Home from '../pages/home';


export default function MainRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/login' element={<Login />} ></Route>
            <Route exact path='/cadastro-cliente' element={<CadastroCliente />} ></Route>
        </Routes>
    )
}