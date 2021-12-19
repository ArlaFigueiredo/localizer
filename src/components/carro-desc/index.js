import React, { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

import './carro-desc.css';

function CarroDesc({id, foto, modelo, marca, categoria, valorDiaria}) {

    const [urlImagem, setUrlImagem] = useState();

    useEffect(() => {
        let storage = getStorage();

        let storageRef = ref(storage, `imagens/${foto}`);

        getDownloadURL(storageRef).then(function (url) {
            setUrlImagem(url);
        });
    }, []);


    return (
        <div className="card ml-2 mr-2">
            <h5 className="card-header text-dark">{modelo} - {marca} </h5>
            <img src={urlImagem} className="card-img-top img-cartao" />

            <div className="card-body">
                <div className="row rodape-card d-flex align-items-center">
                    <span className="badge bg-danger mb-3">{categoria}</span>
                    <span className="badge bg-info ml-2 mb-3">DIÁRIA: R$ {valorDiaria}</span>
                </div>
            </div>
        </div>
    )
}

export default CarroDesc;