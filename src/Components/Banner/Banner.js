import React from 'react';
// import './Banner.css'

import img from '../../assests/img/bg.jpg';
const sectionStyle = {
    backgroundImage: `url(${img})`,
};

const Banner = () => {
    return (
        <div>
            <section style={sectionStyle} className="py-5">
                <div className='ml-5 md:ml-[160px] md:mt-16'>
                    <h1 className='text-3xl md:text-4xl text-white'>Welcome to.....</h1>
                    <h1 className='text-3xl md:text-6xl text-white py-10 font-serif font-semibold'><span className='text-orange-500'>B</span>ike <span className='text-orange-500'>W</span>arehouse</h1>
                    <p className='py-8 md:w-[500px] text-white md:text-xl banner-text'>Biker’s Warehouse is one of Johannesburg’s top bike and accessory brand suppliers. Our brands are carefully selected to offer the widest product range to cater for the needs of any road, dual-sport or off-road enthusiast. Added to our emphasis on rigorous parts support, our service department is fully equipped to ensure that all servicing, repair and modification requirements are taken care of quickly and professionally. Biker’s Warehouse is proud dealers for Honda motorcycles, Husqvarna motorcycles and Suzuki Motorcycles. We also offer various quality imported motorcycles.</p>
                    <button type="button" class="text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-yellow-900">See More</button>

                </div>
            </section>
        </div>
    );
};

export default Banner;