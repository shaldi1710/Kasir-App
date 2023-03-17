import { faPlus, faMinus, faTrash, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { numberWithCommas } from '../utils/Utils';

const ModalKeranjang = ({ 
    showModal, 
    handleClose,
    keranjangDetail, 
    jumlah, 
    keterangan, 
    tambah, 
    kurang, 
    changeHandler, 
    handleSubmit,
    totalHarga,
    hapusPesanan,
 }) => {
    if (keranjangDetail) {

        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama}  {" "}
                        <strong>
                            (Rp. {numberWithCommas(totalHarga)})
                        </strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Total Harga :</Form.Label>
                            <p>
                                <strong> Rp. {numberWithCommas(keranjangDetail.total_harga)}</strong>
                            </p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>jumlah :</Form.Label>
                            <br />
                            <div style={{ display: "flex", gap: "5px" }}>
                                <Button variant='primary' size='sm' onClick={() => tambah ()}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                                <strong>{jumlah}</strong>
                                <Button variant='primary' size='sm' onClick={() => kurang ()}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                            </div>

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.controlTextarea1">
                            <Form.Label>Keterangan :</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows="3" 
                            name="Keterangan" 
                            placeholder='Contoh: Nasi Stengah, Pedas, Tidak Pedas'
                            value = {keterangan} 
                            onChange={(event) => changeHandler (event)} />
                        </Form.Group>
                        <Button variant= "primary" type= "submit"> 
                            Simpan 
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
                        <FontAwesomeIcon icon = {faTrash} /> Hapus Pesanan 
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Kosong
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Kososong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }



}

export default ModalKeranjang