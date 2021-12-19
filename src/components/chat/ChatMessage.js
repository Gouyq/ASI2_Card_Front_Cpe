import Toast from 'react-bootstrap/Toast'
import { useSelector } from 'react-redux'
import { selectChatUser } from '../../core/selectors';

export const ChatMessage = ({message}) => {
    const users = useSelector(selectChatUser);
    const user = users.find( user => user.id === message.senderId);
    const time = Date(message.timestamp)
    return (
        <Toast style={{ width: "unset" }}>
            <Toast.Header closeButton={false}>
                <strong className="me-auto">{user.lastName} {user.surName}</strong>
                <small>{time}</small>
            </Toast.Header>
            <Toast.Body>{message.message}</Toast.Body>
        </Toast>
    )
}