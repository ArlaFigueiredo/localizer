import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import CarroCard from '../../components/carro-card';

import './escolha-reserva.css';

function EscolhaReserva() {

    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();


    const [veiculos, setVeiculos] = useState([]);


    async function fetchVeiculos() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "veiculo"));
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                modelo: doc.data().modelo,
                marca: doc.data().marca,
                placa: doc.data().placa,
                cor: doc.data().cor,
                categoria: doc.data().categoria,
                chassi: doc.data().chassi,
                renavam: doc.data().renavam,
                qtdCadeiras: doc.data().qtdCadeiras,
                qtdAssentosElevacao: doc.data().qtdAssentosElevacao,
                gps: doc.data().gps,
                quilometragem: doc.data().quilometragem,
                valorDiaria: doc.data().valorDiaria,
                disponibilidade: doc.data().disponibilidade,
                nivelCombustivel: doc.data().nivelCombustivel,
                foto: doc.data().foto
            });
        })
        setVeiculos(lista);
    }

    useEffect(() => {
        fetchVeiculos();
    }, []);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="card card-timeline border-none mt-3">
                    <ul className="bs4-order-tracking">
                        <li className="step active">
                            <div><i className="fas fa-car"></i></div> Escolha um veículo
                        </li>
                        <li className="step">
                            <div><i className="fas fa-funnel-dollar"></i></div> Escolha as opções de reserva
                        </li>
                        <li className="step">
                            <div><i className="fas fa-check-double"></i></div> Confirme as escolhas
                        </li>
                        <li className="step ">
                            <div><i className="fas fa-flag-checkered"></i></div> Reservado
                        </li>
                    </ul>
                </div>
                <div className="row p-3">
                    {veiculos.map(item => <CarroCard key={item.id} id={item.id} foto={item.foto} modelo={item.modelo} marca={item.marca} categoria={item.categoria} valorDiaria={item.valorDiaria}/>)}
                </div>
            </div>
        </>
    )
}

export default EscolhaReserva;