import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import Swal from 'sweetalert2'

import './cadastro-cliente.css';

function CadastroCliente() {

    const [nome, setNome] = useState();
    const [sexo, setSexo] = useState();
    const [rg, setRg] = useState();
    const [cpf, setCpf] = useState();
    const [cnh, setCnh] = useState();
    const [telefone, setTelefone] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [complemento, setComplemento] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    async function cadastrar() {

        let db = getFirestore();
        try {

            let usuarioRef = await addDoc(collection(db, "usuario"), {
                email: email,
                senha: senha,
                privilege: "CLIENTE",
            })
            let docRef = await addDoc(collection(db, "cliente"), {
                nome: nome,
                sexo: sexo,
                rg: rg,
                cpf: cpf,
                cnh: cnh,
                telefone: telefone,
                cep: cep,
                logradouro: logradouro,
                complemento: complemento,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                usuario: usuarioRef,
                dataNascimento: dataNascimento
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: ' Cadastro Efetuado com sucesso!',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.reload();
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
            <div className="card text-white bg-light ml-5 mr-5 mt-5">
                <div className="card-body">
                    <div className="col-12 mt-5 ml-2 mr-2">
                        <div className="row">
                            <h1 className="mx-auto">Cadastro</h1>
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
                                    <input onChange={(e) => setDataNascimento(e.target.value)} type="date" className="form-control" />
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
                                <div className="col-3">
                                    <label className="text-dark">RG:</label>
                                    <input onChange={(e) => setRg(e.target.value)} type="text" className="form-control" />
                                </div>

                                <div className="col-3">
                                    <label className="text-dark">CPF:</label>
                                    <input onChange={(e) => setCpf(e.target.value)} type="text" className="form-control" />
                                </div>

                                <div className="col-3">
                                    <label className="text-dark">Carteira de Habilitação:</label>
                                    <input onChange={(e) => setCnh(e.target.value)} type="text" className="form-control" />
                                </div>

                                <div className="col-3">
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

                            <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                        </form>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default CadastroCliente;