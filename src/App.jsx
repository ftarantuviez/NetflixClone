import React from 'react'
import {Row} from './components/Row/Row'
import Banner from "./components/Banner/Banner";
import requests from './Requests'
import './App.css'


class App extends React.Component{

    render(){
        return(
            <div className="app">
                <Banner 
                    fetchUrl={requests.fetchNetflixOriginals}
                />

                <h1>Title of the best movie</h1>
                <Row title="Netflix Originals" 
                    fetchUrl={requests.fetchNetflixOriginals} 
                    isLargeRow={true}    
                />
                <Row title="Trending now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </div>
        )
    } 
}

export default App;