import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logoCS.jpg';
import { setChatUsers } from '../../core/actions';
import { selectUser } from '../../core/selectors';
import { UserSocket } from '../../sockets/UserSocket';

export const HomePage = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    UserSocket.getInstance().listenUserConnected((data) => {
        dispatch(setChatUsers(data));
    });
    return (
    <div>
        <img src={logo} alt='Home Page Logo' />
    </div>
    )
}