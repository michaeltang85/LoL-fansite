import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { getChampions, deleteChampions } from '../actions/championActions';
import PropTypes from 'prop-types';

class ChampionForm extends Component{
    
    componentDidMount(){
        this.props.getChampions();
    }


    render() {
        
        const {champions} = this.props.champion;

        return(
            <Container>
                

                <ListGroup>
                    {champions.map(({ _id, name,title}) => (
                        <ListGroupItem>
                            {name} {title}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        );

    }


}

ChampionForm.propTypes ={
    getChampions: PropTypes.func.isRequired,
    champion: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
    champion: state.champion
});

export default connect(mapStatetoProps, { getChampions, deleteChampions })(ChampionForm);
