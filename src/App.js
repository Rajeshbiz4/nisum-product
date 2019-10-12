import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import rootReducer from './app/container/reducers'
import rootEpic from './app/container/epics'
import './App.css';
import Main from './app/container/main'

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <Router>
      <div className="App">
        <Main />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
