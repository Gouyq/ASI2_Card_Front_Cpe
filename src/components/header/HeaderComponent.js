import { Navbar } from "../menu/Navbar"
import './HeaderComponent.css'

export const HeaderComponent = (props) => {
    const user = {
        name: 'Vincent Couturier',
        price: 5000
    }
    return (
        <div class="header">
            <div className="ui clearing segment header-content">
                <h3 className="ui floated header title">
                    <i className="money icon"></i>
                    <div className="content">
                        SELL
                        <div className="sub header">Sell your card to get money</div>
                    </div>
                </h3>
                <Navbar></Navbar>
                <h3 className="ui floated header user-navbar">
                    <i className="user circle outline icon"></i>
                    <div className="content">
                        <span id="userNameId">{user.name}</span>
                        <div className="sub header"><span>{user.price}</span>$</div>
                    </div>
                </h3>
            </div>
        </div>
    )
}