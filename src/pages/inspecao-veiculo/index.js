import { getFirestore, addDoc, getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

function InspecaoVeiculo() {

    const funcionarioId = useSelector(state => state.usuarioID)

    // Parametros de inspecao
    const [retrovisores, setRetrovisores] = useState("DANIFICADO");
    const [farol, setFarol] = useState("DANIFICADO");
    const [extintor, setExtintor] = useState("DANIFICADO");
    const [alarme, setAlarme] = useState("DANIFICADO");
    const [pneus, setPneus] = useState("DANIFICADO");
    const [pneuReserva, setPneuReserva] = useState("DANIFICADO");
    const [lataria, setLataria] = useState("DANIFICADO");
    const [parachoques, setParachoques] = useState("DANIFICADO");
    const [bancos, setBancos] = useState("DANIFICADO");
    const [reservaId, setReservaId] = useState();
    const [status, setStatus] = useState();

    // Parametros Manutencao
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    const [reservas, setReservas] = useState([]);

    async function fetchReservas() {
        let db = getFirestore();
        let querySnapshot = await getDocs(collection(db, "reserva"));
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                clienteId: doc.data().clienteId,
                dataFim: doc.data().dataFim,
                dataInicio: doc.data().dataInicio,
                seguroColisao: doc.data().seguroColisao,
                seguroFurto: doc.data().seguroFurto,
                seguroRoubo: doc.data().seguroRoubo,
                status: doc.data().status,
                valorTotal: doc.data().valorTotal,
                veiculoId: doc.data().veiculoId,
            });
        })
        setReservas(lista);
    }

    useEffect(() => {
        console.log("LOAD RESERVAS")
        fetchReservas();
    }, []);


    async function cadastrar() {

        let db = getFirestore();

        let inspecaoRef = await addDoc(collection(db, "inspecao"), {
            retrovisores: retrovisores,
            farol: farol,
            extintor: extintor,
            alarme: alarme,
            pneus: pneus,
            pneuReserva: pneuReserva,
            lataria: lataria,
            parachoques: parachoques,
            bancos: bancos,
            status: status,
            funcionarioId: funcionarioId,
            reservaId: reservaId,
        });

        if(status === "REPROVADO"){
            let inspecaoRef = await addDoc(collection(db, "manutencao"), {
                descricao: descricao,
                valor: valor,
                funcionarioId: funcionarioId,
                reservaId: reservaId,
            });
        }

        let docRef = doc(db, "reserva", reservaId);
        
        await updateDoc(docRef, {
            status: "EM INSPECAO"
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Inspeção cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 1500
        });
        
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
                                <h1 className="mx-auto">Inspeção Veículo</h1>
                            </div>

                            <form>

                            <span className="badge">Reserva</span>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">ReservaID:</label>
                                        <select onChange={(e) => setReservaId(e.target.value)} className="form-control">
                                            <option>-- Selecione a reserva --</option>
                                            {reservas.map(item => <option key={item.id}>{item.id}</option>)}
                                        </select>
                                    </div>
                                </div>


                                <span className="badge">Cheklist</span>
                                <div className="form-check">
                                    <input onChange={(e) => setRetrovisores(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Retrovisores
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setFarol(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Farol
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setExtintor(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Extintor de Incêncio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setAlarme(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Alarme
                                    </label>
                                </div><div className="form-check">
                                    <input onChange={(e) => setPneus(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Pneus
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setPneuReserva(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Pneu Reverva
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setLataria(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Lataria
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setParachoques(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Parachoques
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(e) => setBancos(e.target.value)} className="form-check-input" type="checkbox" value="OK" />
                                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                                        Bancos
                                    </label>
                                </div>
                                <span className="badge">Manutenção Veiculo</span>
                                <div className="form-group row">

                                    <div className="col-6">
                                        <label className="text-dark">Descricao:</label>
                                        <textarea onChange={(e) => setDescricao(e.target.value)} className="form-control" rows="3" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">Valor:</label>
                                        <input onChange={(e) => setValor(e.target.value)} type="text" className="form-control" />
                                    </div>

                                </div>
                                <span className="badge">Resultado</span>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">Status:</label>
                                        <select onChange={(e) => setStatus(e.target.value)} className="form-control">
                                            <option>-- Selecione o status --</option>
                                            <option>APROVADO</option>
                                            <option>REPROVADO</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={() => { cadastrar() }} className="btn btn-block btn-cadastro" type="button">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default InspecaoVeiculo;