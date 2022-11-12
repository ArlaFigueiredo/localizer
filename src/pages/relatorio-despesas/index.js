import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';


function RelatorioDespesa() {
    const [despesas, setDespesas] = useState([]);

    const [options, setOptions] = useState({
        title: 'Gráfico de Despesas'
    })
    const [data, setData] = useState([
        ['Tipo', 'Valor'],
        ['COMPRA DE VEICULO', 0],
        ['MANUNTEÇAÕ',0],
        ['SERVIÇO',0],
        ['FOLHA DE PAGAMENTO', 0]
    ])

    async function fetchDespesas() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "despesas"));
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                descricao: doc.data().descricao,
                tipo: doc.data().tipo,
                fornecedorId: doc.data().fornecedorId,
                valor: doc.data().valor,
                dataVencimento: doc.data().dataVencimento,
                status: doc.data().status,
            });
        });
        setOptions("Arla");
        setDespesas(lista);
    }

    useEffect(() => {
        fetchDespesas();
    }, []);

    function getValoresDespesas() {
        let valoresDespesas = {
            veiculo: 0,
            manuntencao: 0,
            servico: 0,
            folha: 0
        }
        for (let despesa of despesas) {
            if (despesa.tipo === 'SERVIÇO')
                valoresDespesas.servico += parseInt(despesa.valor);
            if (despesa.tipo === 'COMPRA DE VEICULO')
                valoresDespesas.veiculo += parseInt(despesa.valor);
            if (despesa.tipo === 'FOLHA DE PAGAMENTO')
                valoresDespesas.folha += parseInt(despesa.valor);
            if (despesa.tipo === 'MANUTENÇAO')
                valoresDespesas.manuntencao += parseInt(despesa.valor);
        }
        let dataRelatorio = [
            ['Tipo', 'Valor'],
            ['COMPRA DE VEICULO', valoresDespesas.veiculo],
            ['MANUNTEÇAÕ', valoresDespesas.manuntencao],
            ['SERVIÇO', valoresDespesas.servico],
            ['FOLHA DE PAGAMENTO', valoresDespesas.folha]
        ]

        setData(dataRelatorio);
    }

  

    async function cadastrar() {
        getValoresDespesas()
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='container'>
                <div className="card text-white bg-light ml-5 mr-5 mt-5">
                    <div className="card-body">
                        <div className="col-12 mt-5 ml-2 mr-2">
                            <div className="col-6">
                                <h1 className="mx-auto">Relatório de Despesa</h1>
                                <Chart
                                    width={'500px'}
                                    height={'300px'}
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <button onClick={cadastrar} className="btn btn-block btn-cadastro" type="button">Gerar Relatório de Despesas </button>
                </div>
            </div>

        </div>
    )
}

export default RelatorioDespesa
