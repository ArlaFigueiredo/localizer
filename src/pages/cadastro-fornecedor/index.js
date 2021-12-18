import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import './cadastro-fornecedor.css';

function CadastroFornecedor() {

    const [razaoSocial, setRazaoSocial] = useState();
    const [nomeFantasia, setNomeFantasia] = useState();
    const [cnpj, setCnpj] = useState();
    const [inscricaoEstadual, setInscricaoEstadual] = useState();
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState();
    const [telefone, setTelefone] = useState();

    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [complemento, setComplemento] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [email, setEmail] = useState();

    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();

    async function cadastrar() {

        setMsgTipo(null);
        let db = getFirestore();
        try {
            let docRef = await addDoc(collection(db, "fornecedor"), {
                nomeFantasia: nomeFantasia,
                razaoSocial: razaoSocial,
                inscricaoEstadual: inscricaoEstadual,
                inscricaoMunicipal: inscricaoMunicipal,
                cnpj: cnpj,
                email: email,
                telefone: telefone,
                cep: cep,
                logradouro: logradouro,
                complemento: complemento,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
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
            <div className='container'>
                <div className="card text-white bg-light ml-5 mr-5 mt-5">
                    <div className="card-body">
                        <div className="col-12 mt-5 ml-2 mr-2">
                            <div className="row">
                                <h1 className="mx-auto">Cadastro Fornecedor</h1>
                            </div>

                            <form>
                                <span className="badge">Dados Principais</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Nome Fantasia:</label>
                                        <input onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Razão Soocial:</label>
                                        <input onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control" />
                                    </div>

                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">CNPJ:</label>
                                        <input onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Incrição Estadual:</label>
                                        <input onChange={(e) => setInscricaoEstadual(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Inscrição Municipal:</label>
                                        <input onChange={(e) => setInscricaoMunicipal(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-8">
                                        <label className="text-dark">E-mail:</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Telefone:</label>
                                        <input onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>


                                <span className="badge">Endereço</span>
                                <div className="form-group row">
                                    <div className="col-2">
                                        <label className="text-dark">CEP:</label>
                                        <input onChange={(e) => setCep(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-5">
                                        <label className="text-dark">Logradouro:</label>
                                        <input onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Complemento:</label>
                                        <input onChange={(e) => setComplemento(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-2">
                                        <label className="text-dark">Número:</label>
                                        <input onChange={(e) => setNumero(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">Bairro:</label>
                                        <input onChange={(e) => setBairro(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Cidade:</label>
                                        <input onChange={(e) => setCidade(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Estado:</label>
                                        <input onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>

                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>

                            <div className="msg-login text-dark text-center my-5">
                                {msgTipo === 'sucesso' && <span><i className="fas fa-check text-success fa-3x"></i><h3>Fornecedor cadastrado com sucesso!</h3></span>}
                                {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CadastroFornecedor;