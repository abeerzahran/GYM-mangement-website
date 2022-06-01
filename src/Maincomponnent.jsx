import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './CONTACT/Contact';
import NavBar from './NavBar';
import Homme from './home/Homme';
import EVENTS from './EVENTS/EVENTS';
import REG from './REG/REG';
import Foot from './FOOT';
import Shop from './SHOP/Shop';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
      },
  });
class Maincomponnent extends React.Component {
    
    render() { 
        return <React.Fragment>
            <ThemeProvider theme={theme}>  
                <div>
                <NavBar/>
                
                    
                    <Routes>

                        <Route path="/" exact element={<Homme/>}/>

                        <Route path="/events" exact element={<EVENTS/>}/>

                        <Route path="/reg" exact element={<REG/>}/>

                        <Route path="/contact" exact element={<Contact/>}/>

                        <Route path="/shop" exact element={<Shop/>}/>


                    </Routes>

                    
                    <Foot></Foot>
                </div>
            </ThemeProvider>  
        </React.Fragment>;
    }
}
 
export default Maincomponnent;