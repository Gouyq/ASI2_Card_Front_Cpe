import { CardCell } from './CardCell'
import { CardDetails } from './CardDetails'

import { useSelector } from 'react-redux'
import { selectCards } from '../../core/selectors';

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const CardTab = () => {

    const cards = useSelector(selectCards)
    
    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Family</th>
                                <th>HP</th>
                                <th>Charisme</th>
                                <th>Credibilite</th>
                                <th>Affinity</th>
                                <th>Coup spécial</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards !== undefined ? cards.map(card => <CardCell card={card} key={card.id} />) : ''}
                        </tbody>
                    </Table>
                </Col>
                <Col sm={3}>
                    <CardDetails></CardDetails>
                </Col>
            </Row>
        </Container>
    )
}