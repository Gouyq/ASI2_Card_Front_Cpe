import { useEffect, useState } from 'react'

import ToastContainer from 'react-bootstrap/ToastContainer'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { ChatMessage } from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { selectChatMessage, selectChatUser, selectChatUserSelected, selectUser } from '../../core/selectors'
import { setChatMessages, setChatUserSelect } from '../../core/actions'
import { ChatSocket } from '../../sockets/ChatSocket'

export const ChatTab = (props) => {

    const [messageInputValue, setMessageInputValue] = useState(props.messageInputValue)
    let receiverChat = useSelector(selectChatUserSelected);
    const dispatch = useDispatch()

    let messages = useSelector(selectChatMessage)
    let usersChat = useSelector(selectChatUser);
    const userConnected = useSelector(selectUser);
    usersChat = usersChat.filter(user => user.id !== userConnected.id)

    const handleSelectUser = (event) => {
        dispatch(setChatUserSelect(usersChat.find(user => user.id === parseInt(event.target.value))))
    }

    const handleChangeMessage = (event) => {
        setMessageInputValue(event.target.value)
    }

    const handleMessageReceive = (data) => {
        dispatch(setChatMessages(messages.push(data)));
        
    }
    
    useEffect(() => {
        ChatSocket.getInstance().listenMessage(handleMessageReceive);
    },[])


    

    const handleSend = () => {
        if(receiverChat){
            let localMessages = []

            if(messages != undefined) {
                localMessages = messages
            }

            console.log("avant push")
            console.log(messages)
            var data = { 
                message: messageInputValue,
                timestamp: Date.now(),
                senderId: userConnected.id,
                receiverId: receiverChat.id
            }
            ChatSocket.getInstance().emitMessage(JSON.stringify(data))
            console.log("receiver");
            console.log(receiverChat)
            //setMessages([...localMessages, { name: 'Moi', timestamp: 'Maintenant', body: messageInputValue }])

            console.log("apres push")
            console.log(messages)
        }
        else{
            console.log("Error, user not selected")
        }

    }



    return (
        <div className="m-3" style={{ background: 'white' }}>
            <div className="m-3">
                <ToastContainer style={{ width: "unset" }}>
                    { messages !== undefined ? messages.map(message => <ChatMessage message={message} key={message.senderId} />) : '' }
                </ToastContainer>
            </div>
            <InputGroup>
                <Form.Select onChange={handleSelectUser.bind(this)}>
                    <option>Select user</option>
                    { usersChat.map(user=> <option value={user.id}>{user.surName} {user.lastName}</option>) }
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