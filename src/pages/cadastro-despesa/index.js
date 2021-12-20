import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Swal from 'sweetalert2'

function CadastroDespesa() {

    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();
    const [fornecedorId, setFornecedor] = useState();
    const [tipo, setTipo] = useState();
    const [dataVencimento, setDataVencimento] = useState();

    const [fornecedores, setFornecedores] = useState([]);

    async function fetchFornecedor() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "fornecedor"));
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                nomeFantasia: doc.data().nomeFantasia,
                razaoSocial: doc.data().razaoSocial,
            });
        });
        setFornecedores(lista);
    }

    useEffect(() => {
        console.log("fornecedores")
        fetchFornecedor();
    }, []);


    async function cadastrar() {

        let db = getFirestore();
        let despesaRef = await addDoc(collection(db, "despesas"), {
            descricao: descricao,
            tipo: tipo,
            fornecedorId: fornecedorId.split("##")[0],
            valor: valor,
            dataVencimento: dataVencimento,
            status: "PENDENTE",
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Despesa cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 1500
        });

        window.location.reload();
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='container'>
                <div className="card text-white bg-light ml-5 mr-5 mt-5">
                    <div className="card-body">
                        <div className="col-12 mt-5 ml-2 mr-2">
                            <div className="row">
                                <h1 className="mx-auto">Cadastro de Despesa</h1>
                            </div>

                            <form>
                                <span className="badge">Dados da despesa</span>
                                <div className="form-group row">
                                    <div className="col-6">
                                        <label className="text-dark">Fornecedor:</label>
                                        <select onChange={(e) => setFornecedor(e.target.value)} className="form-control">
                                            <option>-- Selecione o Fornecedor --</option>
                                            {fornecedores.map(item => <option key={item.id}>{item.id}##{item.nomeFantasia}</option>)}
                                        </select>
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Tipo:</label>
                                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                                            <option>-- Selecione o Tipo --</option>
                                            <option>SERVIÇO</option>
                                            <option>COMPRA DE VEICULO</option>
                                            <option>FOLHA DE PAGAMENTO</option>
                                            <option>MANUTENÇAO</option>
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <label className="text-dark">Descricao:</label>
                                        <input onChange={(e) => setDescricao(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Valor:</label>
                                        <span className="input-group-text position-absolute">R$</span>
                                        <input onChange={(e) => setValor(e.target.value)} type="text" className="form-control text-center" />
                                    </div>

                                    <div className="col-6">
                                        <label className="text-dark">Data Vencimento:</label>
                                        <input onChange={(e) => setDataVencimento(e.target.value)} type="date" className="form-control" />
                                    </div>

                                    <div className="col-12 mt-3">
                                        <button onClick={cadastrar} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                                    </div>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CadastroDespesa