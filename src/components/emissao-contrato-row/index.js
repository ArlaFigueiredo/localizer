import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {getFirestore,updateDoc, doc} from 'firebase/firestore';
import {Link} from 'react-router-dom';
import PDF from '../contrato-document';
import Modal from 'react-modal';
// import Pdf from "react-to-pdf";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      width: '70%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

function EmitirContratoRow({ reserva }, props) {

    const userID = useSelector(state => state.usuarioID);
    const [postSubmitted, setPostSubmitted] = useState(false);
    

      function afterOpenModal(e) {
        props.onAfterOpen(e, 'After Modal Opened');
      }
    
      function onModalClose(event) {
        let data = { name: 'example', type: 'closed from child' };
        props.onCloseModal(event, data);
      }

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

    function Example (){
        
        

        Swal.fire({
            title: 'Confirma a impressão do contrato?',
            confirmButtonText: 'Imprimir',
          }).then((reserva) => {
            /* Read more about isConfirmed, isDenied below */
            if (reserva) {
                setPostSubmitted(true);
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
            <td>
            {postSubmitted ? 
                <div>
                    <Modal
                    isOpen={postSubmitted}
                    onAfterOpen={e => afterOpenModal(e)}
                    onRequestClose={() => setPostSubmitted(false) }
                    shouldCloseOnOverlayClick={true}
                    style={customStyles}
                    ariaHideApp={false}
                    >
                        
                        <PDF title={reserva.id} />
                        <button type="button" className="btn" onClick={() => setPostSubmitted(false)}>Fechar</button>
                        
                    </Modal>
                </div> 
            : 
                <div></div>
            }
            </td>
        </tr>
         
    )
}

export default EmitirContratoRow;