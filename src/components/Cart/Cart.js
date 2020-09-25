import React from 'react';
import './Cart.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { name, img, id } = props.cart;
    return (
        <div className="cart-container" >
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <h1> {name} </h1> </Card.Title>
                    <Link to={`/area/${id}`} >
                        <Button variant="primary">Booking</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;