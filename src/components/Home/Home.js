import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import FinalPage from '../FinalPage/FinalPage';

const Home = () => {
    const travel = fakeData;
    const [cart, setCart] = useState(travel);

    return (

        <div>
            <h1>Travel Guru</h1>
            {
                cart.map(cart => <Cart cart={cart} ></Cart>)
            }

        </div>
    );
};

export default Home;