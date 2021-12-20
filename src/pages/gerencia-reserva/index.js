import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import ReservaRow from '../../components/reserva-row';

function GerenciaReserva() {

    const [reservas, setReservas] = useState([]);

    async function fetchReservas() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "reserva"));
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
        console.log("LOAD RESERVAS")
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
                            <th scope="col">Valor</th>
                            <th scope="col">Aprovação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map(item => <ReservaRow key={item.id} reserva={item} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GerenciaReserva;