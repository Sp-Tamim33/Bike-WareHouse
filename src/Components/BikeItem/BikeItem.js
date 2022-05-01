import React from 'react';
import { useNavigate } from 'react-router-dom';



const BikeItem = ({ bike }) => {
    const navigate = useNavigate()
    const handleUpdateButton = () => {
        navigate(`/bike/${bike._id}`)
    }
    return (
        <div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-orange-100 dark:border-gray-700">

                <img class="rounded-t-lg p-3 rounded-lg" src={bike.img} alt="" />

                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight">Name : {bike.name}</h5>

                    <p class="mb-3 font-normal">{bike.description}</p>
                    <p className='py-2 text-xl'>Price : {bike.price} tk</p>
                    <p className='py-2 text-xl mb-3'>Quantity : {bike.quantity}</p>
                    <p className='text-xl mb-3'>suplier : Sp Bike Suplier</p>
                    <button onClick={() => handleUpdateButton(bike._id)} class="inline-flex items-center py-2 px-3 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BikeItem;