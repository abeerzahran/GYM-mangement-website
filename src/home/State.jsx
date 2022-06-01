import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import {faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import {faUserClock} from '@fortawesome/free-solid-svg-icons'
class State extends React.Component {
    render() { 
        return <React.Fragment>
            <Container className='state'>
                <Row>
                    <Col xs={5}>
                        <hr className='Line'/> 
                    </Col>
                    <Col xs={2}>
                        <div className='lineHead1'>What We Offer</div>
                        <div className='lineHead2'>Our Classes</div>
                    </Col>
                    <Col xs={5}>
                        <hr className='Line'/>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row style={{margin:"0px 80px", padding:"20px 0px", color:"white"}}>
                    <Col>
                        <FontAwesomeIcon icon={faDumbbell} className='stateFont1'></FontAwesomeIcon><br/><br/>
                        <div className='stateFont1'>BODY BUILDING</div><br/>
                        <div  className='stateFont2'>Lorem ipsum dolor sit alor amet, cotns ekolor adip iscing elit Nulla molestie convallis convallis.</div>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faHeartbeat} className='stateFont1'></FontAwesomeIcon><br/><br/>
                        <div className='stateFont1'>HEALTH</div><br/>
                        <div className='stateFont2'>Lorem ipsum dolor sit alor amet, cotns ekolor adip iscing elit Nulla molestie convallis convallis.</div>

                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faUserClock} className='stateFont1'></FontAwesomeIcon><br/><br/>
                        <div className='stateFont1'>SAVE TIME</div><br/>
                        <div className='stateFont2'>Lorem ipsum dolor sit alor amet, cotns ekolor adip iscing elit Nulla molestie convallis convallis.</div>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>;
    }
}
 
export default State;