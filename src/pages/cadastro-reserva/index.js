import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection, getDoc } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import CarroDesc from '../../components/carro-desc';
import { useSelector, useDispatch } from 'react-redux';

import './cadastro-reserva.css';

function CadastroReserva() {

    const { id } = useParams();
    const userID = useSelector(state => state.usuarioID)

    const [seguroFurto, setSeguroFurto] = useState();
    const [seguroRoubo, setSeguroRoubo] = useState();
    const [seguroColisao, setSeguroColisao] = useState();

    const [dataInicio, setDataInicio] = useState();
    const [dataFim, setDataFim] = useState();
    const [valorTotal, setTotal] = useState();

    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();


    const [veiculo, setVeiculo] = useState([]);

    async function fetchVeiculo() {
        let db = getFirestore();
        let docRef = doc(db, "veiculo", id);
        let veic = await getDoc(docRef);
        let lista = [];
        lista.push({
            id: veic.id,
            modelo: veic.data().modelo,
            marca: veic.data().marca,
            placa: veic.data().placa,
            cor: veic.data().cor,
            categoria: veic.data().categoria,
            chassi: veic.data().chassi,
            renavam: veic.data().renavam,
            qtdCadeiras: veic.data().qtdCadeiras,
            qtdAssentosElevacao: veic.data().qtdAssentosElevacao,
            gps: veic.data().gps,
            quilometragem: veic.data().quilometragem,
            valorDiaria: veic.data().valorDiaria,
            disponibilidade: veic.data().disponibilidade,
            nivelCombustivel: veic.data().nivelCombustivel,
            foto: veic.data().foto
        });
        setVeiculo(lista);
    }

    useEffect(() => {
        console.log("Executou");
        fetchVeiculo();
    }, []);


    async function cadastrar() {
        setMsgTipo(null);
        let db = getFirestore();
        try {
            let docRef = await addDoc(collection(db, "reserva"), {
                clienteId: userID,
                dataFim: dataFim,
                dataInicio: dataInicio,
                seguroColisao: seguroColisao,
                seguroFurto: seguroFurto,
                seguroRoubo: seguroRoubo,
                veiculoId: id,
                valorTotal: valorTotal,
            })
            setMsgTipo('sucesso');
        } catch (e) {
            setMsgTipo('erro');
            setMsg(e);
        }

    }

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="card text-white bg-light ml-4 mr-4 mt-5" id="formReserva">
                    <div className="card-body">
                        <div>
                            <div className="row">
                                <h1 className="mx-auto">Reservar Veículo</h1>
                            </div>

                            <form>
                                <span className="badge mb-2">Veiculo escolhido</span>
                                <div className='col-4 mb-3'>
                                {veiculo.map(item => <CarroDesc key={item.id} id={item.id} foto={item.foto} modelo={item.modelo} marca={item.marca} categoria={item.categoria} valorDiaria={item.valorDiaria}/>)}
                                </div>
                                <span className="badge">Escolha as opções de seguro</span>
                                <div className="form-group row">
                                    <div className="col-6 ml-4">
                                        <input onChange={(e) => setSeguroFurto(e.target.value)} className="form-check-input" type="checkbox" value="SIM" />
                                        <label className="form-check-label text-dark" htmlFor="flexCheckDefault">
                                            Furto (R$ 5,00 / dia)
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-6 ml-4">
                                        <input onChange={(e) => setSeguroRoubo(e.target.value)} className="form-check-input" type="checkbox" value="SIM" />
                                        <label className="form-check-label text-dark" htmlFor="flexCheckDefault">
                                            Roubo (R$ 10,00 / dia)
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-6 ml-4">
                                        <input onChange={(e) => setSeguroColisao(e.target.value)} className="form-check-input" type="checkbox" value="SIM" />
                                        <label className="form-check-label text-dark" htmlFor="flexCheckDefault">
                                            Colisão (R$ 15,00 / dia)
                                        </label>
                                    </div>
                                </div>
                                <span className="badge">Periodo Locação</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Inicio:</label>
                                        <input onChange={(e) => setDataInicio(e.target.value)} type="date" className="form-control" />
                                    </div>

                                    <div className="col-6 mb-5">
                                        <label className="text-dark">Fim:</label>
                                        <input onChange={(e) => setDataFim(e.target.value)} type="date" className="form-control" />
                                    </div>
                                </div>

                                <span className="badge mb-2">Valor total</span>
                                <div className="form-group row">
                                    <div className="input-group mb-3 ml-3 mr-3">
                                        <span className="input-group-text">R$</span>
                                        <input onChange={(e) => setTotal(e.target.value)} type="text" className="form-control"/>
                                    </div>
                                </div>
                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>
                            <div className="msg-login text-dark text-center my-5">
                                {msgTipo === 'sucesso' && <span><i className="fas fa-check text-success fa-3x"></i><h3>Reserva cadastrada com sucesso!</h3></span>}
                                {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CadastroReserva;