import React from 'react';
import Banner from '../Banner/Banner';
import BikeItem from '../BikeItem/BikeItems';


const Home = () => {
    return (
        <div>
            <Banner />
            <div className='py-8'>
                <BikeItem />
            </div>
        </div>
    );
};

export default Home;