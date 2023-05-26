import { useState, useEffect } from 'react';

function useMyCustomHook(defaultValue){
    const[data, setData] = useState(defaultValue);
    const[loading, setLoading] = useState(false);

    useEffect(() => { setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((apiData) => setData(apiData))
        setLoading(false);
    }, []);
    return {data, loading};
}

export default useMyCustomHook;