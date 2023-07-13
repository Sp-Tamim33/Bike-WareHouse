import React from 'react';
import useBike from '../../hooks/useBike';
import BikeItem from '../BikeItem/BikeItem';

const ManageInventory = () => {
    const [bikes, setBikes] = useBike();
    const handleDelete = id => {
        const userConfirm = window.confirm('are you sure to delete ?')
        if (userConfirm) {
            // console.log(id);
            const url = `https://bike-warehouse-server.onrender.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // console.log('deleted');
                        const remaining = bikes.filter(user => user._id !== id);
                        setBikes(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-10 py-10'>
                {
                    bikes.map(bike => <BikeItem key={bike._id} bike={bike}>
                        <button onClick={() => handleDelete(bike._id)} class="ml-10 inline-flex items-center py-2 px-3 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Delete
                        </button>
                    </BikeItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;