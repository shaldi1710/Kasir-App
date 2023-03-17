import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { numberWithCommas } from "../utils/Utils";
import { API_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

class TotalBayar extends Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs

        }

        axios.post(API_URL + "pesanans", pesanan).then((res) => {
            this.props.navigate('/sukses')
        })

    };


    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);
        return (
            <>

            {/* WEB */}
                <div className='fixed-bottom d-none d-md-block'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className="px-4" >
                            <h4>
                                Total Harga : {""}
                                <strong className='float-end mr-2'>
                                    Rp.{numberWithCommas(totalBayar)}
                                </strong>
                            </h4>
                            <Button
                                variant='primary'
                                block className="mb-2 mt-4 mr-2 w-100"
                                size="lg"
                                onClick={() => this.submitTotalBayar(totalBayar)}>

                                <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>

                </div>

                {/* MOBILE  */}
                <div className='d-sm-block d-md-none'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className="px-4" >
                            <h4>
                                Total Harga : {""}
                                <strong className='float-end mr-2'>
                                    Rp.{numberWithCommas(totalBayar)}
                                </strong>
                            </h4>
                            <Button
                                variant='primary'
                                block className="mb-2 mt-4 mr-2 w-100"
                                size="lg"
                                onClick={() => this.submitTotalBayar(totalBayar)}>

                                <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>

                </div>
            </>
        );
    }
}
function WithNavigate(props) {
    const navigate = useNavigate();
    // return <TotalBayar{...props} navigate={(e) => navigate(e)} />
    return <TotalBayar{...props} navigate={navigate} />

}

export default WithNavigate