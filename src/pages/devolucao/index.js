import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore, updateDoc, collection, doc, getDoc, query, where, getDocs } from 'firebase/firestore';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Swal from 'sweetalert2'

function Devolucao() {

    const { id } = useParams();
    const [reserva, setReserva] = useState({});
    const [quilometragem, setQuilometragem] = useState();
    const [nivelCombustivel, setNvlCombustivel] = useState();
    const [disponibilidade, setDisponibilidade] = useState();
    const [inspecao, setInspecao] = useState({});

    async function fetchReserva() {
        let db = getFirestore();

        let docRef = doc(db, "reserva", id);
        let reserv = await getDoc(docRef);
        let lista = [];
        lista.push({
            id: reserv.id,
            clienteId: reserv.data().clienteId,
            dataFim: reserv.data().dataFim,
            dataInicio: reserv.data().dataInicio,
            seguroColisao: reserv.data().seguroColisao,
            seguroFurto: reserv.data().seguroFurto,
            seguroRoubo: reserv.data().seguroRoubo,
            status: reserv.data().status,
            valorTotal: reserv.data().valorTotal,
            veiculoId: reserv.data().veiculoId,
        });
        setReserva(lista[0]);
    }

    useEffect(() => {
        fetchReserva();
    }, []);

    async function fetchInspecoes() {
        let db = getFirestore();
        const inspecaoRef = collection(db, "inspecao");
        const q = query(inspecaoRef, where("reservaId", "==", id));
        const querySnapshot = await getDocs(q);
        let lista = [];
        querySnapshot.forEach((doc) => {
            lista.push({
                id: doc.id,
                status: doc.data().status,
                multa: doc.data().multa,
            });
        })
        setInspecao(lista[0]);
    }

    useEffect(() => {
        fetchInspecoes();
    }, []);


    async function atualizar() {
        let db = getFirestore();
        let docRef = doc(db, "reserva", reserva.id);
        let veicRef = doc(db, "veiculo", reserva.veiculoId);
        try {
            await updateDoc(docRef, {
                status: "DEVOLVIDA",
                multa: inspecao.multa,
            });
            await updateDoc(veicRef, {
                disponibilidade: disponibilidade,
                quilometragem: quilometragem,
                nivelCombustivel: nivelCombustivel,
            });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Devolução efetuada com sucesso!',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (erro) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: erro,
                showConfirmButton: false,
                timer: 1500
            })

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
                                <span className="badge">Reserva ID</span>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">{reserva.id}</label>
                                    </div>
                                </div>
                                <span className="badge">Inspeção</span>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">{inspecao.status}</label>
                                    </div>
                                </div>

                                <span className="badge">Multa Inspeção</span>
                                <div className="form-group row">
                                    <div className="col-3">
                                        <label className="text-dark">R$ {inspecao.multa}</label>
                                    </div>
                                </div>
                                <span className="badge">Atualizações Veiculo</span>
                                <div className="form-group row">


                                    <div className="col-3">
                                        <label className="text-dark">
                                            <i className="fas fa-tachometer-alt fa-1x mr-2"></i>
                                            Quilometragem:
                                        </label>
                                        <input onChange={(e) => setQuilometragem(e.target.value)} type="text" className="form-control" />
                                    </div>

                                    <div className="col-3">
                                        <label className="text-dark">
                                            <i className="fas fa-gas-pump fa-1x mr-2"></i>
                                            Nível de Combustível:
                                        </label>
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
                                <button onClick={() => { atualizar() }} className="btn btn-block btn-cadastro" type="button">Atualizar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Devolucao;