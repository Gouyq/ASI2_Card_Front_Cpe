import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components/header/HeaderComponent';
import { RouterApp } from './router/RouterApp';
import { FooterComponent } from './components/footer/FooterComponent';

import { Provider } from 'react-redux';
import { store, persistor } from './core/reducers';
import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div style={{ textAlign: "center" }}>
          <HeaderComponent></HeaderComponent>
          <RouterApp></RouterApp>
          <FooterComponent></FooterComponent>
        </div>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;