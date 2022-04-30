import { useEffect, useState } from "react";


const useBike = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('bikeItem.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return [bikes, setBikes]
};

export default useBike;