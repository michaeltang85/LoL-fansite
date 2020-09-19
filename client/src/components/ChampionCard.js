import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

class ChampionCard extends Component {
    state = {
        champions: [
            { name: 'Aatrox', title: "the blade", lore: "blah...", imageUrl: "/images/Aatrox_0.jpg"},
            { name: 'Ahri', title: "the fox", lore: "blah..."},
            { name: 'Alistar', title: "the cow", lore: "blah..."}
        ]
    }

    render() {
        const { champions } = this.state;

        return(
            <Container>
                <div>
                    {champions.map(({ name, title, lore, imageUrl }) => (
                    <Card>
                        <CardImg top width="50%" src={imageUrl} alt="champ image"/>
                        <CardBody>
                             <CardTitle>{name}</CardTitle>
                             <CardSubtitle>{title}</CardSubtitle>
                             <CardText>{lore}</CardText>
                            <Button>View More</Button>
                        </CardBody>
                    </Card>
                    ))}
                </div>
                </Container>
        );
    }
}

export default ChampionCard;