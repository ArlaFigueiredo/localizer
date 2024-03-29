import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore, doc, addDoc, collection, getDoc } from 'firebase/firestore';

import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import CarroDesc from '../../components/carro-desc';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2'

import './cadastro-reserva.css';

function CadastroReserva() {

    const { id } = useParams();
    const userID = useSelector(state => state.usuarioID)

    const [seguroFurto, setSeguroFurto] = useState('NAO');
    const [seguroRoubo, setSeguroRoubo] = useState('NAO');
    const [seguroColisao, setSeguroColisao] = useState('NAO');

    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);
    const [valorTotal, setTotal] = useState('');

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
        fetchVeiculo();
    }, []);

    useEffect(() => {
        if (dataInicio !== null && dataFim !== null)
            calculaValorTotal();
    }, [dataFim, dataInicio]);


    function calculaValorTotal() {
        let diariaSeguro = 0;
        if (seguroFurto === 'SIM')
            diariaSeguro += 5;
        if (seguroRoubo === 'SIM')
            diariaSeguro += 10;
        if (seguroColisao === 'SIM')
            diariaSeguro += 15;

        let dias = moment(dataFim).diff(moment(dataInicio), 'days');
        if (dias < 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'A data final deve ser maior com a data de inicio',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if (dias == 0) {
            dias = 1
            setTotal((diariaSeguro * dias) + (parseInt(veiculo[0].valorDiaria) * dias))
        } else {
            setTotal((diariaSeguro * dias) + (parseInt(veiculo[0].valorDiaria) * dias))
        }
    }

    async function cadastrar() {
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
                status: "PENDENTE",
                multa: null,
                funcionarioId: null,
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: ' Reserva Efetuada com sucesso!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (e) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: e,
                showConfirmButton: false,
                timer: 1500
            })
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
                                    {veiculo.map(item => <CarroDesc key={item.id} id={item.id} foto={item.foto} modelo={item.modelo} marca={item.marca} categoria={item.categoria} valorDiaria={item.valorDiaria} />)}
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
                                        <input disabled value={valorTotal} onChange={(e) => setTotal(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CadastroReserva;