import React, { Component } from 'react';
import AppNavbar from './components/AppNavBar';
import ChampionList from './components/ChampionList';
import ChampionModal from './components/ChampionModal';
import ScrollButton from './components/ScrollButton.js';
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
      <ScrollButton/>
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
