import React from 'react'
import {Row} from './components/Row/Row'
import requests from './Requests'


class App extends React.Component{

    render(){
        return(
            <>
                <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
                <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            </>
        )
    } 
}

export default App;