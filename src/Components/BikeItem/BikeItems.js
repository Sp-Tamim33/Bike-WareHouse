import React from 'react';
import useBike from '../../hooks/useBike';
import BikeItem from './BikeItem';

const BikeItems = () => {
    const [bikes] = useBike();
    return (
        <div>
            <h1 className='text-3xl md:text-6xl text-center py-5 mb-3 font font-semibold'><span className='text-orange-500'>B</span>ikes in our <span className='text-orange-500'>W</span>arehouse </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 md:ml-8 gap-8'>
                {
                    bikes.slice(0, 6).map(bike => <BikeItem bike={bike} key={bike._id}></BikeItem>)
                }
            </div>
        </div>
    );
};

export default BikeItems;