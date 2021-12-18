import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, updateDoc, deleteDoc, doc, addDoc, getDocs, collection } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import './cadastro-funcionario.css';

function CadastroFuncionario() {

    const [nome, setNome] = useState();
    const [sexo, setSexo] = useState();
    const [rg, setRg] = useState();
    const [cpf, setCpf] = useState();
    const [cnh, setCnh] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [logradouro, setLogradouro] = useState();
    const [complemento, setComplemento] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();

    const [privilegio, setPrivilegio] = useState();
    const [cargo, setCargo] = useState();
    const [salario, setSalario] = useState();
    const [carteiraTrabalho, setCarteiraTrabalho] = useState();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();

    async function cadastrar() {

        setMsgTipo(null);
        let db = getFirestore();
        try {

            let usuarioRef = await addDoc(collection(db, "usuario"), {
                email: email,
                senha: senha,
                privilege: privilegio,
            })
            let docRef = await addDoc(collection(db, "funcionario"), {
                nome: nome,
                sexo: sexo,
                rg: rg,
                cpf: cpf,
                cnh: cnh,
                logradouro: logradouro,
                complemento: complemento,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                usuario: usuarioRef,
                dataNascimento: dataNascimento,
                cargo: cargo,
                salario: salario,
                carteiraTrabalho: carteiraTrabalho
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
                <div className="card text-white bg-light ml-3 mr-3 mt-5">
                    <div className="card-body">
                        <div>
                            <div className="row">
                                <h1 className="mx-auto">Cadastro Funcionário</h1>
                            </div>

                            <form>
                                <span className="badge">Dados Pessoais</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Nome:</label>
                                        <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Data de nascimento:</label>
                                        <input onChange={(e) => setDataNascimento(e.target.value) } type="date"  className="form-control"/>
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Sexo:</label>
                                        <select onChange={(e) => setSexo(e.target.value)} className="form-control">
                                            <option>-- Selecione o sexo --</option>
                                            <option>Feminino</option>
                                            <option>Masculino</option>
                                            <option>Indefinido</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">RG:</label>
                                        <input onChange={(e) => setRg(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">CPF:</label>
                                        <input onChange={(e) => setCpf(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Carteira de Habilitação:</label>
                                        <input onChange={(e) => setCnh(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>


                                <span className="badge">Endereço</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Logradouro:</label>
                                        <input onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
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

                                <span className="badge">Dados Profissionais</span>
                                <div className="form-group row">
                                    <div className="col-4">
                                        <label className="text-dark">Cargo:</label>
                                        <input onChange={(e) => setCargo(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Salario:</label>
                                        <input onChange={(e) => setSalario(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Carteira de Trabalho:</label>
                                        <input onChange={(e) => setCarteiraTrabalho(e.target.value)} type="text" className="form-control" />
                                    </div>
                                </div>

                                <span className="badge">Dados de Acesso</span>
                                <div className="form-group row">
                                    <div className="col-8">
                                        <label className="text-dark">E-mail:</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-4">
                                        <label className="text-dark">Senha:</label>
                                        <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">Nível de Permissão:</label>
                                        <select onChange={(e) => setPrivilegio(e.target.value)} className="form-control">
                                            <option>-- Selecione o privilégio --</option>
                                            <option>FUNCIONARIO</option>
                                            <option>ADMIN</option>
                                        </select>
                                    </div>
                                </div>

                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>

                            <div className="msg-login text-dark text-center my-5">
                                {msgTipo === 'sucesso' && <span><i className="fas fa-check text-success fa-3x"></i><h3>Funcionário cadastrado com sucesso!</h3></span>}
                                {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128546; </span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastroFuncionario;