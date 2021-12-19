import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logoCS.jpg';
import { setChatUsers } from '../../core/actions';
import { UserSocket } from '../../sockets/UserSocket';

export const HomePage = () => {
    const dispatch = useDispatch();
    UserSocket.getInstance().listenUserConnected((data) => {
        console.log('data')
        console.log(data)
        dispatch(setChatUsers(data));
    });
    return (
    <div>
        <img src={logo} alt='Home Page Logo' />
    </div>
    )
}