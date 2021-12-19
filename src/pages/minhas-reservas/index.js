import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import ReservaCard from '../../components/reserva-card';


function MinhasReservas() {


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
                <div className="row p-3">
                    {reservas.map(item => <ReservaCard key={item.id} id={item.id} veiculo={item.veiculoId} dataFim={item.dataFim} dataInicio={item.dataInicio} total={item.valorTotal} status={item.status}/>)}
                </div>
            </div>
        </>
    )
}

export default MinhasReservas;