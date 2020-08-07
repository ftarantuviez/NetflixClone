import React from 'react'
import {Row} from './components/Row/Row'
import NavBar from './components/NavBar/NavBar'
import Banner from "./components/Banner/Banner";
import requests from './Requests'
import './App.css'


class App extends React.Component{

    state = {
        netflixOriginals: [],
        trending: [],
        topRated: [],
        comedyMovies: [],
        horrorMovies: [],
        romanceMovies: [],
        documentaries: [],
        loading: true
    }

    componentDidMount = () => {
        this.setState({
            netflixOriginals: requests.fetchNetflixOriginals,
            trending: requests.fetchTrending,
            topRated: requests.fetchTopRated,
            comedyMovies: requests.fetchComedyMovies,
            horrorMovies: requests.fetchHorrorMovies,
            romanceMovies: requests.fetchRomanceMovies,
            documentaries: requests.fetchDocumentaries,
            loading: false
        })
    }

    render(){
        if(this.state.loading) return 'loading....'
        else return(
            <div className="app">
                <NavBar />
                <Banner 
                    fetchUrl={this.state.netflixOriginals}
                />

                <Row title="Netflix Originals" 
                    fetchUrl={this.state.netflixOriginals} 
                    isLargeRow={true}    
                />
                <Row title="Trending now" fetchUrl={this.state.trending} />
                <Row title="Top Rated" fetchUrl={this.state.topRated} />
                <Row title="Comedy Movies" fetchUrl={this.state.comedyMovies} />
                <Row title="Horror Movies" fetchUrl={this.state.horrorMovies} />
                <Row title="Romance Movies" fetchUrl={this.state.romanceMovies} />
                <Row title="Documentaries" fetchUrl={this.state.documentaries} />
            </div>
        )
    } 
}

export default App;