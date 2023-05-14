import { Modal} from "react-bootstrap";

const ModalComponent = ({show, handleClose,title,actions}) => {

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product Name</Modal.Body>
        <Modal.Footer>
            {actions}
        </Modal.Footer>
    </Modal>
}
export default ModalComponent