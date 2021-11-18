import { useState } from 'react'

import ToastContainer from 'react-bootstrap/ToastContainer'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { ChatMessage } from './ChatMessage'

export const ChatTab = (props) => {

    const [messageInputValue, setMessageInputValue] = useState(props.messageInputValue)
    const [recipient, setRecipient] = useState(props.recipient)

    const handleSelectUser = (event) => {
        setRecipient(event.target.value)
    }

    const handleChangeMessage = (event) => {
        setMessageInputValue(event.target.value)
    }

    const handleSend = () => {
        // TODO - Ici, version en dur.
        console.log('Recipient: ' + recipient + ' | Message: ' + messageInputValue)

        let localMessages = []

        if(messages != undefined) {
            localMessages = messages
        }

        console.log("avant push")
        console.log(messages)

        setMessages([...localMessages, { name: 'Moi', timestamp: 'Maintenant', body: messageInputValue }])

        console.log("apres push")
        console.log(messages)
    }

    // TODO - Récupérer les messages. Ici, les messages sont en dur.
    const [messages, setMessages] = useState(props.messages)

    // TODO - Ici, liste en dur.
    const recipients = [
        {
            name: 'John'
        },
        {
            name: 'Jane'
        },
        {
            name: 'Jack'
        }
    ]

    return (
        <div className="m-3" style={{ background: 'white' }}>
            <div className="m-3">
                <ToastContainer style={{ width: "unset" }}>
                    { messages !== undefined ? messages.map(message => <ChatMessage message={message} key={message.name} />) : '' }
                </ToastContainer>
            </div>
            <InputGroup>
                <Form.Select onChange={handleSelectUser.bind(this)}>
                    <option>Select user</option>
                    { recipients.map(recipient => <option value={recipient.name}>{recipient.name}</option>) }
                </Form.Select>
                <FormControl placeholder="Message" onChange={handleChangeMessage}>
                </FormControl>
                <Button variant="secondary" onClick={handleSend}>
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}