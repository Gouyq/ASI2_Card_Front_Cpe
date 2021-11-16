import { Navbar } from "../menu/Navbar"
import './HeaderComponent.css'

import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectIsLogged } from '../../core/selectors';
import { setLogoutUser } from '../../core/actions';

export const HeaderComponent = () => {
    const user = useSelector(selectUser)
    const isLogin = useSelector(selectIsLogged)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setLogoutUser())
    }

    const titlePage = (
        <h3 className="ui floated header title">
            <i class="chess king icon"></i>
            <div className="content">
                CardStore
            </div>
        </h3>
    )

    const userInfo = (                
        <h3 className="ui floated header user-navbar">
            <i className="user circle outline icon"></i>
            <div className="content">
                <span id="userNameId">{user.surName} {user.lastName}</span>
                <div className="sub header"><span>{user.account}</span>$</div>
            </div>
            <i class="sign-out alternate icon" onClick={handleLogout}></i>
        </h3>
    )

    return (
        <div class="header">
            <div className="ui clearing segment header-content">
                { isLogin ? titlePage : ''} 
                <Navbar></Navbar>
                { isLogin ? userInfo : ''} 
            </div>
        </div>
    )
}