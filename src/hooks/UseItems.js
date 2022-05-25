import { useEffect, useState } from "react";

const UseItems = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    return [carts, setCarts];
}

export default UseItems;

