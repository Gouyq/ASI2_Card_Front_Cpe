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


  export const Navbar = function(props) {
    return (
      <Router>
        <div>
            toto
            50 balles
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/buy">Buy</Link>
              </li>
              <li>
                <Link to="/sell">Sell</Link>
              </li>
              <li>
                <Link to="/play">Play</Link>
              </li>
            </ul>
          </nav>

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
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  