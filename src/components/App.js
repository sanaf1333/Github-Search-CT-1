import React, {Component}  from 'react';
import SearchandDropdown from './searchbar';
import TopBar from './topBar';
import { Card, Space } from 'antd';
import { Col, Row } from 'antd';
import CardLayout from './card';
import axios from 'axios';
import FetchData from '../Data/searchQuery';

  
class App extends Component{
    
    render(){
        return(
            <div >
                <h1>Hello world whats your problem!</h1>
                <Col>
                <Row justify="space-around" align="middle" gutter={[36,36]}>
                <TopBar/>
                </Row>
                <Row justify="space-around" align="middle" gutter={[16,16]}>
                <SearchandDropdown/>
                </Row>
                </Col>
                
                
            </div>
        )
    }
}
export default App;