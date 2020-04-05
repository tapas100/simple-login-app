import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'
import './App.css';
import './assets/scss/_global.scss'
import { store ,history} from './store';
import Routes from './routes';
import {authActions} from './actions'
const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
       <Routes />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;