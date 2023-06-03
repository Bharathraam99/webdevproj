import {useEffect, useState} from "react";


const CallExternalAPI = ({type}) => {

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/exercises?type=' + type, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'qs5WVpBDq5Hm1QxE7W8qnQ==neepvZyKo05PG6Sb'
            },
        })
            .then(response => response.json())
            .then(d => setData(d))
    });

    const [data, setData] = useState(null);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default CallExternalAPI;