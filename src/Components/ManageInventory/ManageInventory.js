import React from 'react';
import useBike from '../../hooks/useBike';
import BikeItem from '../BikeItem/BikeItem';

const ManageInventory = () => {
    const [bikes] = useBike();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-10 py-10'>
                {
                    bikes.map(bike => <BikeItem key={bike._id} bike={bike}></BikeItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;