import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection } from 'firebase/firestore';
import { getStorage, ref, uploadString, uploadBytes, getDownloadURL } from 'firebase/storage'
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import './cadastro-veiculo.css';

function CadastroVeiculo() {

    const [modelo, setModelo] = useState();
    const [marca, setMarca] = useState();
    const [placa, setPlaca] = useState();
    const [cor, setCor] = useState();
    const [categoria, setCategoria] = useState();
    const [chassi, setChassi] = useState();
    const [renavam, setRenavam] = useState();
    const [qtdCadeiras, setQtdCadeiras] = useState();
    const [qtdAssentosElevacao, setQtdAssentosElevacao] = useState();
    const [gps, setGps] = useState();
    const [quilometragem, setQuilometragem] = useState();
    const [nivelCombustivel, setNvlCombustivel] = useState();
    const [valorDiaria, setValorDiaria] = useState();
    const [disponibilidade, setDisponibilidade] = useState();

    const [foto, setFoto] = useState();

    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();


    async function cadastrar() {

        setMsgTipo(null);
        console.log(foto)
        let db = getFirestore();
        let storage = getStorage();

        let storageRef = ref(storage, `imagens/${foto.name}`);

        try {

            uploadBytes(storageRef, foto).then(function (snapshot) {
                console.log('Uploaded foto!');
            });

            let veiculoRef = await addDoc(collection(db, "veiculo"), {
                modelo: modelo,
                marca: marca,
                placa: placa,
                cor: cor,
                categoria: categoria,
                chassi: chassi,
                renavam: renavam,
                qtdCadeiras: qtdCadeiras,
                qtdAssentosElevacao: qtdAssentosElevacao,
                gps: gps,
                quilometragem: quilometragem,
                valorDiaria: valorDiaria,
                disponibilidade: disponibilidade,
                nivelCombustivel: nivelCombustivel,
                foto: foto.name
            });
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
            <div className='container'>
                <div className="card text-white bg-light ml-5 mr-5 mt-5">
                    <div className="card-body">
                        <div className="col-12 mt-5 ml-2 mr-2">
                            <div className="row">
                                <h1 className="mx-auto">Cadastro Veículo</h1>
                            </div>

                            <form>
                                <span className="badge">Dados Principais</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Modelo:</label>
                                        <input onChange={(e) => setModelo(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Marca:</label>
                                        <input onChange={(e) => setMarca(e.target.value)} type="text" className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">Placa:</label>
                                        <input onChange={(e) => setPlaca(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Chassi:</label>
                                        <input onChange={(e) => setChassi(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Renavam:</label>
                                        <input onChange={(e) => setRenavam(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Cor:</label>
                                        <input onChange={(e) => setCor(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Categoria:</label>
                                        <select onChange={(e) => setCategoria(e.target.value)} className="form-control">
                                            <option>-- Selecione a categoria --</option>
                                            <option>UTILITÁRIO</option>
                                            <option>PASSEIO</option>
                                            <option>FAMILIAR</option>
                                            <option>COMPACTO</option>
                                            <option>PRIME</option>
                                        </select>
                                    </div>
                                </div>


                                <span className="badge">Características</span>
                                <div className="form-group">
                                    <label className="text-dark">Upload da Foto</label>
                                    <input onChange={(e) => setFoto(e.target.files[0])} type="file" className="form-control" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">Cadeiras:</label>
                                        <input onChange={(e) => setQtdCadeiras(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Assentos Elevação:</label>
                                        <input onChange={(e) => setQtdAssentosElevacao(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Quilometragem:</label>
                                        <input onChange={(e) => setQuilometragem(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Nível de Combustível:</label>
                                        <input onChange={(e) => setNvlCombustivel(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">GPS:</label>
                                        <input onChange={(e) => setGps(e.target.value)} type="text" className="form-control" />
                                    </div>
                                    <div className="col-4">
                                        <label className="text-dark">Valor Diária:</label>
                                        <input onChange={(e) => setValorDiaria(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <span className="badge mb-2">Disponibilidade</span>
                                <div className="form-check">
                                    <input onChange={(e) => setDisponibilidade(e.target.value)} className="form-check-input" type="radio" name="flexRadioDisp" id="flexRadioDisp1" value='D' />
                                    <label className="form-check-label text-dark" htmlFor="flexRadioDefault1">
                                        Disponivel
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input onChange={(e) => setDisponibilidade(e.target.value)} className="form-check-input" type="radio" name="flexRadioDisp" id="flexRadioDisp2" value='I' />
                                    <label className="form-check-label text-dark" htmlFor="flexRadioDefault2">
                                        Indisponivel
                                    </label>
                                </div>

                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>

                            <div className="msg-login text-dark text-center my-5">
                                {msgTipo === 'sucesso' && <span><i className="fas fa-check text-success fa-3x"></i><h3>Veículo cadastrado com sucesso!</h3></span>}
                                {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CadastroVeiculo;