import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import DevolucaoRow from '../../components/devolucao-row'

function ListagemDevolucao() {

    const [reservas, setReservas] = useState([]);

    
    async function fetchReservas() {
        let db = getFirestore();
        const reservaRef = collection(db, "reserva");
        const q = query(reservaRef, where("status", "==", "INSPECIONADO"));
        const querySnapshot = await getDocs(q);
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                clienteId: doc.data().clienteId,
                dataFim: doc.data().dataFim,
                dataInicio: doc.data().dataInicio,
                seguroColisao: doc.data().seguroColisao,
                seguroFurto: doc.data().seguroFurto,
                seguroRoubo: doc.data().seguroRoubo,
                status: doc.data().status,
                valorTotal: doc.data().valorTotal,
                veiculoId: doc.data().veiculoId,
            });
        })
        setReservas(lista);
    }

    useEffect(() => {
        fetchReservas();
    }, []);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="container">
                <table className="table table-striped table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Reserva-ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cliente-ID</th>
                            <th scope="col">Veiculo-ID</th>
                            <th scope="col">Data Inicio</th>
                            <th scope="col">Data Fim</th>
                            <th scope="col">Status Inspeção</th>
                            <th scope="col">Multa</th>
                            <th scope="col">Devolver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map(item => <DevolucaoRow key={item.id} reserva={item} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListagemDevolucao;