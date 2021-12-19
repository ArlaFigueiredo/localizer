import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'


function ReservaCard({id, veiculo, dataInicio, dataFim, status, total}) {

    return (
        <div className="card ml-2 mr-2">
            <h5 className="card-header text-dark">Reserva - {id} </h5>
            <div className="card-body">
                <div className="row rodape-card d-flex align-items-center">
                    <span className="badge bg-success mb-3">Veiculo: {veiculo}</span>
                    <span className="badge bg-info mb-3">Inicio: {dataInicio}</span>
                    <span className="badge bg-info ml-2 mb-3">Fim: {dataFim}</span>
                    <span className="badge bg-danger ml-2 mb-3">Status: {status}</span>
                    <span className="badge bg-warning ml-2 mb-3">Valor Total: {total}</span>
                </div>
            </div>
        </div>
    )
}

export default ReservaCard;