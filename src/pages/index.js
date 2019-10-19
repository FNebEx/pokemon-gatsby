import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import { Button, Form, FormGroup, Input, Container, Alert } from 'reactstrap';
import Pokemon from '../components/Pokemon';
import Header from '../components/Header'
import Pokedex from 'pokedex-promise-v2';

let pkmn = new Pokedex();

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            searchTerm: undefined,
            name: undefined,
            img: undefined,
            xp: undefined,
            types: undefined,
            game_indices: undefined,
            visible: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleTextChange = (e) => {
        this.setState({
            searchTerm: e.target.value.toLowerCase()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let term = this.state.searchTerm;

        if(this.state.searchTerm.includes(' ')) {
            term = this.state.searchTerm.replace(/\s/g, '-');
        }
        pkmn.getPokemonByName(term)
            .then(response => {
                this.setState({
                    id: response.id,
                    name: response.name,
                    abilities: response.abilities,
                    img: response.sprites.front_default,
                    xp: response.base_experience,
                    types: response.types,
                    game_indices: response.game_indices
                });
            })
            .catch(error => {
                this.setState({
                    visible: true
                });
            })
    }

    handleToggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    componentDidMount() {
        this.setState({
            name: undefined,
            searchTerm: undefined,
            abilities: undefined,
            img: undefined,
            types: undefined,
            game_indices: undefined,
            visible: false
        });
    }
    render() { 
        return (
            <>
                <main >
                    <Header />
                    <Container className='mt-3'>
                        <Alert className='mt-3' color='danger' isOpen={this.state.visible} toggle={this.handleToggle}>Please enter a valid pokemon name</Alert>
                        <Form inline onSubmit={this.handleSubmit} className='mx-auto'>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="terxt" name="pokemon" placeholder="Pokemon" onChange={(e) => this.handleTextChange(e)}/>
                                <Button>Submit</Button>
                                <br />
                            </FormGroup>
                        </Form>


                    {
                        this.state.name !== undefined ? 
                        <Pokemon 
                            id={this.state.id}
                            name={this.state.name}
                            img={this.state.img}
                            abilities={this.state.abilities}
                            xp={this.state.xp}
                            type={this.state.types}
                            game_indices={this.state.game_indices}
                        />
                        : null
                    }
                    </Container>
                </main>
                <br />
            </>
        );
    }
}
 
export default Index;