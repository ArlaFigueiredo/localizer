import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

function CadastroDespesa() {

    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();
    const [fornecedor, setFornecedor] = useState();
    const [tipo, setTipo] = useState();
    const [dataVencimento, setDataVencimento] = useState();

    async function fetchVeiculo() {
        let db = getFirestore();
        let docRef = doc(db, "fornecedor");
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
        setFornecedor(lista);
    }


    function cadastrar() {
        console.log(valor)
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
                                            {/* {fornecedor.map(item => <option key={item.id}>{item.id}</option>)} */}
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