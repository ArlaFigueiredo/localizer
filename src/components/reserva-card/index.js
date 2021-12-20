import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { getFirestore, doc, addDoc, collection, getDoc } from 'firebase/firestore';


function ReservaCard({id, veiculo, dataInicio, dataFim, status, total}) {

    const [refVeiculo, setVeiculo] = useState([]);

    async function fetchVeiculo() {
        let db = getFirestore();
        let docRef = doc(db, "veiculo", veiculo);
        let veic = await getDoc(docRef);
        let lista = [];
        lista.push({
            id: veic.id,
            modelo: veic.data().modelo,
            marca: veic.data().marca,
            placa: veic.data().placa,
            cor: veic.data().cor,
            categoria: veic.data().categoria,
        });
        setVeiculo(lista[0]);
    }

    useEffect(() => {
        fetchVeiculo();
    }, []);

    return (
        <div className="card ml-2 mr-2 mb-4">
            <h5 className="card-header text-dark">Reserva - {id} </h5>
            <div className="card-body">
                <div className="row rodape-card d-flex align-items-center">
                    <h6>
                        Veiculo: 
                        <span className="badge bg-success mb-3">{refVeiculo.modelo} - {refVeiculo.marca}/{refVeiculo.placa}</span>
                    </h6>
                </div>
                <div className="row rodape-card d-flex align-items-center">
                    <h6>Inicio: <span className="badge bg-info mb-3">{dataInicio}</span></h6>
                </div>
                <div className="row rodape-card d-flex align-items-center">
                    <h6>Fim: <span className="badge bg-info mb-3">{dataFim}</span></h6>
                </div>
                <div className="row rodape-card d-flex align-items-center">
                    
                <h4>Status:<span className="badge bg-danger ml-2 mb-3"> {status}</span></h4>
                    
                </div>
                <div className="row rodape-card d-flex align-items-center">
                    
                <h4>Valor Total:<span className="badge bg-warning ml-2 mb-3">R$ {total}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default ReservaCard;