import React, { Component } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from './form';
import Faq from './faq';
import Intro from './intro';


class Contact extends React.Component {
    render() { 
        return (<div>
          <Intro></Intro>

<Container>
  <Row>
 
<Col >
   <Form></Form>
 </Col>
  </Row>
</Container>


<div>
<Faq></Faq>

</div>

        </div>);
    }
}
 
export default Contact;
