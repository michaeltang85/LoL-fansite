import React, {Component} from 'react';
import { Container, Jumbotron} from 'reactstrap';

class Loltron extends Component {
    render(){
        return(
            <Container className="container-fluid">
                <Jumbotron>
                    <h1 className="header">League of Legends</h1>
                    <p>blah blah blah</p>
                    <hr className="my-2" />
                    <p>This site is not officaily assocatied with Riot Games</p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Loltron;
