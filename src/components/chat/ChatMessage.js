import Toast from 'react-bootstrap/Toast'

export const ChatMessage = ({message}) => {
    return (
        <Toast style={{ width: "unset" }}>
            <Toast.Header closeButton={false}>
                <strong className="me-auto">{message.name}</strong>
                <small>{message.timestamp}</small>
            </Toast.Header>
            <Toast.Body>{message.body}</Toast.Body>
        </Toast>
    )
}