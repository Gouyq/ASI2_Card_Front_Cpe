import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components/header/HeaderComponent';
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <RouterApp></RouterApp>
    </BrowserRouter>

  );
}

export default App;
