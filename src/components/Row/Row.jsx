import React, {useState, useEffect} from 'react'
import axios from '../../axios'
export const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData()

    }, [fetchUrl])

    return(
        <>
        
        {/* title */}
            <h1>{title}</h1>

        {/* container -> posters */ }
            <ul>
                {movies.map(movie => (
                    <li>

                    </li>
                ))}
            </ul>
        </>

)
}
