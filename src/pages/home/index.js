import React, { useState, useEffect } from 'react';
import './home.css';
import car from '../../assets/car.webp'
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Home({ match }) {


    return (
        <>
            <Navbar />
            {
                useSelector(state => state.usuarioLogado) > 0 ?
                    <>
                        <Sidebar />
                        <div className="row p-3">
                            <div className="row p-3">
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={car} className="d-block w-100" />
                                </div>
                            </div>
                        </div>
                        <footer className="bd-footer py-5 mt-5">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                                        <h5 className="text-white">INSTITUICIONAL</h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><a href="/">Home</a></li>
                                            <li className="mb-2"><a href="/docs/5.1/">Sobre a Localizer</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-lg-2 mb-3">
                                        <h5 className="text-white">PARA VOCÊ</h5>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap">Minhas Reservas</a></li>
                                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Cadastre-se</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </>
            }

        </>
    )
}

export default Home;