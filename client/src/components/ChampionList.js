import React, {Component} from 'react';
import { Container, ListGroup, ListItem,Button, Col , Row} from 'reactstrap';
import ChampionCard from './ChampionCard';
import { connect } from 'react-redux';
import { getChampions } from '../actions/championActions';
import PropTypes from 'prop-types';
import { CHAMPIONS_LOADING } from '../actions/types';


class ChampionList extends Component {

    componentDidMount(){
        this.props.getChampions();
    }
    
    render() {

        const {champions} = this.props.champion;

        let championCards = champions.map(champion => {
            return (
                <Col sm="4">
                    <ChampionCard champion={champion}/>
                </Col>
            )
        })

        return(
            <Container fluid>
                <Row>
                    {championCards}
                </Row>
            </Container>
        )
    }

}

ChampionList.propTypes = {
    getChampions: PropTypes.func.isRequired,
    champion: PropTypes.object.isRequired
}

const mapStatetoProps = (state) => ({
    champion: state.champion
});

export default connect(mapStatetoProps, {getChampions})(ChampionList)