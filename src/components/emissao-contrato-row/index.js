import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import {getFirestore,updateDoc, doc} from 'firebase/firestore';

function EmitirContratoRow({ reserva }) {

    const userID = useSelector(state => state.usuarioID)

        async function emitirContrato() {

            let db = getFirestore();
            let docRef = doc(db, "reserva", reserva.id);
            try {
                await updateDoc(docRef, {
                    funcionarioId: userID,
                    status: "APROVADA"
                });
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Reserva aprovada com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.reload(); 
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

    const Example = () =>{
        
        Swal.fire({
            title: 'Confirma a impressão do contrato?',
            showCancelButton: true,
            confirmButtonText: 'Imprimir',
            cancelButtonText: 'Cancelar',
          }).then((reserva) => {
            /* Read more about isConfirmed, isDenied below */
            if (reserva) {
              Swal.fire('Saved!', '', 'success')
            } else {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    
    }

    return (
        <tr>
            <th>{reserva.id}</th>
            <td>
                <span className="badge bg-danger mb-3">{reserva.status}</span>
            </td>
            <td>{reserva.clienteId}</td>
            <td>{reserva.veiculoId}</td>
            <td>
                <span className="badge bg-primary mb-3">{reserva.dataInicio}</span>
            </td>
            <td>
                <span className="badge bg-primary mb-3">{reserva.dataFim}</span>
            </td>
            <td>
                <p className="text-bold">R$ {reserva.valorTotal}</p>
            </td>
            <td>
                <button onClick={() => { Example() }} type="button" className="btn btn-success">Emitir Contrato</button>
            </td>
        </tr>
    )
}

export default EmitirContratoRow;