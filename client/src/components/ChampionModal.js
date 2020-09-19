import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addChampions } from '../actions/championActions';


class ChampionModal extends Component {
    state = {
        modal: false,
        name: '',
        title: '',
        lore: '',
        imageUrl: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newChampion = {
            name: this.state.name,
            title: this.state.title,
            lore: this.state.lore,
            imageUrl: this.state.imageUrl,
        }
        // add item via addchampion action
        this.props.addChampions(newChampion);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark" style={{marginbottom: '2rem'}}
                    onClick={this.toggle}
                >Add Champion</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Champion List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" name="name" id="name" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input type="text" name="title" id="title" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Lore</Label>
                            <Input type="textarea" name="lore" id="lore" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>ImageUrl</Label>
                            <Input type="text" name="imageUrl" id="imageUrl" onChange={this.onChange}/>
                        <Button
                            color="dark"
                            style={{marginTop: '2rem'}}
                            block
                        >Add Champion</Button>
                        </FormGroup>
                        </Form>
                    </ModalBody>
                
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    champion: state.champion
});

export default connect(mapStateToProps, {addChampions})(ChampionModal)