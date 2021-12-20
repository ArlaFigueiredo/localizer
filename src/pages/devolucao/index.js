import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

function Devolucao() {

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
                                <h1 className="mx-auto">Devolução Veículo</h1>
                            </div>

                            <form>
                                <span className="badge">Atualizações Veiculo</span>
                                <div className="form-group row">

                                    <div className="col-3">
                                        <label className="text-dark">Quilometragem:</label>
                                        <input onChange={(e) => setQuilometragem(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Nível de Combustível:</label>
                                        <input onChange={(e) => setNvlCombustivel(e.target.value)} type="text" className="form-control" />
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

export default Devolucao;