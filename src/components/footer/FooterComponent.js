import { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { ChatTab } from '../chat/ChatTab'

export const FooterComponent = (props) => {

    const [displayChat, setDisplayChat] = useState(props.displayChat)

    const handleChat = () => {
        setDisplayChat(!displayChat)
    }

    return (
        <div>
            <div>
                { displayChat && <ChatTab/> }
            </div>
            <div>
                <div className="m-3">
                    <hr/>
                    <Row>
                        <Col></Col>
                        <Col>
                            <div>
                                ASI 2 - Group 1
                            </div>
                            <div>
                                GOUY Quentin | PROTIERE Axel | VEBER Vincent | VERGNON Corentin
                            </div>
                            <br/>
                            <div>
                                <i className="bi bi-github"></i>&nbsp;
                                <a href="https://github.com/Gouyq/ASI2_Card_Front_Cpe" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ float: 'right' }}>
                                <Button size="lg" onClick={handleChat}>
                                    <i className="bi bi-chat-left-dots"></i>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}