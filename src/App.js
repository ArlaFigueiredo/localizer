import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { store, persistor } from '../src/store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes></Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
