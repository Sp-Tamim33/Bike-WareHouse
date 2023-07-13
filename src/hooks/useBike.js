import { useEffect, useState } from "react";


const useBike = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://bike-warehouse-server.onrender.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return [bikes, setBikes]
};

export default useBike;