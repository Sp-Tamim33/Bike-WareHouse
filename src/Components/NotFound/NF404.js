import React from 'react';
import Img from './notfound404.jpg'

const NF404 = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 text-red-500 font-semibold'>Page Not Found !</h1>
            <div className='mt-10'>
                <img className='mx-auto' width={1100} src={Img} alt="" />
            </div>
        </div>
    );
};

export default NF404;