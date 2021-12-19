import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';


function RelatorioDespesa() {

    const [options, setOptions] = useState({
        title: 'Gráfico de Despesas'
    })
    const [data, setData] = useState([
        ['Tipo', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])

    const [despesas, setDespesas] = useState([]);

    async function fetchDespesas() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "despesa"));
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
        })
        setDespesas(lista);
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
            </div>

        </div>
    )
}

export default RelatorioDespesa