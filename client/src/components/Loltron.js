import React, {Component} from 'react';
import { Container, Jumbotron} from 'reactstrap';
import "../../public/styles/loltron.css"

class Loltron extends Component {
    render(){
        return(
            <div>
                <Jumbotron fluid >
                    <Container fluid className="jumbotron">
                     </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Loltron;
