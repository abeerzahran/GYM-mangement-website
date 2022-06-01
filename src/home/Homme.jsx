import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Carouselimage from './Carouselimg';
import Classcontent from './Classcontent';
import State from './State';
class Homme extends React.Component {
    render() { 
        return <React.Fragment>
            <Container>
                <Row>
                    <Carouselimage/>
                    <Classcontent/>
                </Row>
            </Container>
            <State/>
            
        </React.Fragment>;
    }
}
export default Homme;