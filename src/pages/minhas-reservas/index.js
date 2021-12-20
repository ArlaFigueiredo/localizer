import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import ReservaCard from '../../components/reserva-card';


function MinhasReservas() {

    const [reservas, setReservas] = useState([]);
    const userID = useSelector(state => state.usuarioID)

    async function fetchReservas() {
        let db = getFirestore();

        const reservaRef = collection(db, "reserva");
        const q = query(reservaRef, where("clienteId", "==", userID));
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
                <div className="row p-3">
                    {reservas.map(item => <ReservaCard key={item.id} id={item.id} veiculo={item.veiculoId} dataFim={item.dataFim} dataInicio={item.dataInicio} total={item.valorTotal} status={item.status}/>)}
                </div>
            </div>
        </>
    )
}

export default MinhasReservas;