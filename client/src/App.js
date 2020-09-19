import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ChampionCard from './components/ChampionCard';
import Loltron from './components/Loltron';
import ChampionForm from './components/ChampionForm';
import ChampionList from './components/ChampionList';
import ChampionModal from './components/ChampionModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store.js';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <div className="center">
        <ChampionModal />
      </div>
      <ChampionList/>
      </Container>
    </div>
    </Provider>
  );
}





export default App;
