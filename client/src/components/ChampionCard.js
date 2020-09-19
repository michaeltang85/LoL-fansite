import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import '../App.css';

class ChampionCard extends Component {
    constructor(props){
        super(props);
    }

    

    render() {
        return(
                <Card>
                    <CardImg top width="100%" src={this.props.champion.imageURL} alt="champ image"/>
                    <CardBody>
                            <CardTitle className="cardTitle">{this.props.champion.name}</CardTitle>
                            <CardSubtitle className="cardSubtitle">{this.props.champion.title}</CardSubtitle>
                            <CardText className="cardText">{this.props.champion.lore}</CardText>
                            <Button>View More</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default ChampionCard;