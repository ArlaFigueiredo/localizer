import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';


function RelatorioReceita() {
    const [receitas, setReceitas] = useState([]);

    const [options, setOptions] = useState({
        title: 'Gráfico de Receita'
    })
    const [data, setData] = useState([
        ['Mês', 'Receita'],
        ['Janeiro', 0],
        ['Fevereiro', 0],
        ['Março', 0],
        ['Abril', 0],
        ['Maio', 0],
        ['Junho', 0],
        ['Julho', 0],
        ['Agosto', 0],
        ['Setembro', 0],
        ['Outubro', 0],
        ['Novembro', 0],
        ['Dezembro', 0],

    ])
    async function fetchReceitas() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "reserva"));
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                valorTotal: doc.data().valorTotal,
                dataInicio: doc.data().dataInicio,
            });
        });
        setReceitas(lista);
    }

    useEffect(() => {
        fetchReceitas();
    }, []);

    function getValoresReceita() {
        let valoresDespesas = {
            janeiro: 0,
            fevereiro: 0,
            marco: 0,
            abril: 0,
            maio: 0,
            junho: 0,
            julho: 0,
            agosto: 0,
            setembro: 0,
            outubro: 0,
            novembro: 0,
            dezembro: 0
        }
        for (let i = 0; i < receitas.length; i++) {
            if (receitas[i].dataInicio.split('-')[1] == 1)
                valoresDespesas.janeiro += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 2)
                valoresDespesas.fevereiro += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 3)
                valoresDespesas.marco += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 4)
                valoresDespesas.abril += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 5)
                valoresDespesas.maio += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 6)
                valoresDespesas.junho += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 7)
                valoresDespesas.julho += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 8)
                valoresDespesas.agosto += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 9)
                valoresDespesas.setembro += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 10)
                valoresDespesas.outubro += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 11)
                valoresDespesas.novembro += parseInt(receitas[i].valorTotal);
            if (receitas[i].dataInicio.split('-')[1] == 12)
                valoresDespesas.dezembro += parseInt(receitas[i].valorTotal);
        }
        let dataRelatorio = [
            ['Mês', 'Receita'],
            ['Janeiro', valoresDespesas.janeiro],
            ['Fevereiro', valoresDespesas.fevereiro],
            ['Março', valoresDespesas.marco],
            ['Abril', valoresDespesas.abril],
            ['Maio', valoresDespesas.maio],
            ['Junho', valoresDespesas.junho],
            ['Julho', valoresDespesas.julho],
            ['Agosto', valoresDespesas.agosto],
            ['Setembro', valoresDespesas.setembro],
            ['Outubro', valoresDespesas.outubro],
            ['Novembro', valoresDespesas.novembro],
            ['Dezembro', valoresDespesas.dezembro],
        ]
        setData(dataRelatorio);
    }

    function gerarRelatorio() {
        getValoresReceita()
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
                                <h1 className="mx-auto">Relatório de Receitas</h1>
                                <Chart
                                    width={'950px'}
                                    height={'300px'}
                                    chartType="Bar"
                                    data={data}
                                    options={options}
                                />
                            </div>
                            <div className="col-12 mt-3">
                                <button onClick={gerarRelatorio} className="btn btn-block btn-cadastro" type="button">Gerar Relatório de Receitas </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RelatorioReceita