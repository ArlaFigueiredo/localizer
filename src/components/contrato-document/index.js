import Modal from 'react-bootstrap/Modal'

function Example({ reserva }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div>
            <p>Teste</p>
            <p>${reserva.id}</p>
        </div>
      </>
    );
  }
  
  render(<Example />);

  export default Example;