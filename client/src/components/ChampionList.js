import React, {Component} from 'react';
import { Container, ListGroup, ListItem,Button} from 'reactstrap';
import championCard from 'ChampionCard';

class ChampionList extends Component {

    
    render() {
        return(
            <Container>
                <Button

                
                >Add Info</Button>
                <championCard props/>
            </Container>
        )
    }

}

export default ChampionList