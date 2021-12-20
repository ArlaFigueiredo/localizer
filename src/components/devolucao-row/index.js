import React, { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

function DevolucaoRow({ reserva }) {

    const [inspecao, setInspecao] = useState({});

    
    async function fetchInspecoes() {
        let db = getFirestore();
        const inspecaoRef = collection(db, "inspecao");
        const q = query(inspecaoRef, where("reservaId", "==", reserva.id));
        const querySnapshot = await getDocs(q);
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                status: doc.data().status,
                multa: doc.data().multa,
            });
        })
        setInspecao(lista[0]);
    }

    useEffect(() => {
        fetchInspecoes();
    }, []);

    return (
        <tr>
            <th>{reserva.id}</th>
            <td>
                <span className="badge bg-danger mb-3">{reserva.status}</span>
            </td>
            <td>{reserva.clienteId}</td>
            <td>{reserva.veiculoId}</td>
            <td>
                <span className="badge bg-primary mb-3">{reserva.dataInicio}</span>
            </td>
            <td>
                <span className="badge bg-primary mb-3">{reserva.dataFim}</span>
            </td>
            <td>
                <span className="badge bg-warning mb-3">{inspecao.status}</span>
            </td>
            <td>
                <span className="badge bg-danger mb-3">{inspecao.multa}</span>
            </td>
            <td>
                <button type="button" className="btn btn-primary">Devolver</button>
            </td>
        </tr>
    )
}

export default DevolucaoRow;