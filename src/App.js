import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components/header/HeaderComponent';
import { RouterApp } from './router/RouterApp';

import { Provider } from 'react-redux';
import store from './core/reducers';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <RouterApp></RouterApp>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
