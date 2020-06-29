import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Header from './Components/Header';
import CardList from './Components/Cardlist';
import Filter from './Components/Filter';

const App = () => {
  return (
      <Provider store={createStore()}>
        <h1>Movie</h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Header/>
            <CardList/>
          </div>
          <Filter/>
        </div>
      </Provider>
  )
}

export default App;
