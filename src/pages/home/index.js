import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home({ match }) {


    return (
        <>
            <div className="row p-3 ">
                <h2 className="mx-auto p-5">Reservas Efetuadas</h2>
                <input type="text" className="form-control text-center" placeholder="Pesquisar reservas.." />
            </div>

            <div className="row p-3">

            </div>
        </>
    )
}

export default Home;