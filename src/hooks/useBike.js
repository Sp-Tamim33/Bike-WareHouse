import { useEffect, useState } from "react";


const useBike = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://polar-mesa-96378.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return [bikes, setBikes]
};

export default useBike;