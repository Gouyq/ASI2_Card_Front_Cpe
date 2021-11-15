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


  export const Navbar = function(props) {
    const user = {
      name: 'Vincent Couturier',
      price: 5000
    }
    return (
      <Router>
        <div class="header">
          <div className="ui clearing segment header-content">
          <h3 className="ui floated header title">
                <i className="money icon"></i>
                <div className="content">
                    SELL
                    <div className="sub header">Sell your card to get money</div>
                </div>
            </h3>
            <nav className="navMenu header ">
                  <Link to="/">Home</Link>
                  <Link to="/buy">Buy</Link>
                  <Link to="/sell">Sell</Link>
                  <Link to="/play">Play</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
            </nav>
            <h3 className="ui floated header user-navbar">
                <i className="user circle outline icon"></i>
                <div className="content">
                    <span id="userNameId">{user.name}</span>
                    <div className="sub header"><span>{user.price}</span>$</div>
                </div>
            </h3>
          </div>
          <Switch>
          <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/sell">
              <SellPage />
            </Route>
            <Route path="/buy">
              <BuyPage />
            </Route>
            <Route path="/login">
              <UserFormLoginPage />
            </Route>
            <Route path="/register">
              <UserFormRegisterPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  