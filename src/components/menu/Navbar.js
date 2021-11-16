import {
    Link
  } from "react-router-dom";

import './Navbar.css'
import 'fontsource-roboto';
import '../../assets/Semantic-UI-CSS-master/semantic.css'

import { useSelector } from 'react-redux'
import { selectIsLogged } from '../../core/selectors'
import { selectUser } from "../../core/selectors";


export const Navbar = function() {

  const isLogged = useSelector(selectIsLogged)
  const user = useSelector(selectUser)

  console.log("[REDUX] isLogged: " + isLogged)
  console.log("[REDUX] user: " + JSON.stringify(user))

  if(isLogged){
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
  