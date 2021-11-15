import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { BuyPage } from "../../views/Buy/BuyPage";
import { HomePage } from "../../views/Home/HomePage";
import { PlayPage } from "../../views/Play/PlayPage";
import { SellPage } from "../../views/Sell/SellPage";

import { UserFormLoginPage } from "../../views/Form/UserFormLoginPage";
import { UserFormRegisterPage } from "../../views/Form/UserFormRegisterPage";

import './Navbar.css'
import 'fontsource-roboto';
import '../../assets/Semantic-UI-CSS-master/semantic.css'
import { RouterApp } from "../../router/RouterApp";
import { isLogin } from "../../utils/auth";


export const Navbar = function(props) {
  if(isLogin()){
    return (
      <nav className="navMenu header">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/play">Play</Link>
      </nav>
    )
  }
  else{
    return (
      <nav className="navMenu header">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    )
    
  }
}
  