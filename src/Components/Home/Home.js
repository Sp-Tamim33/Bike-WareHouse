import React from 'react';
import Banner from '../Banner/Banner';
import BikeItem from '../BikeItem/BikeItems';
import Footer from '../Footer/Footer';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <div className='py-8'>
                <BikeItem />
            </div>
            <div>
                <Testimonial />
            </div>
            <div>
                <NewsLetter />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;