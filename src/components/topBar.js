import React from "react";
import { GithubFilled } from '@ant-design/icons';
import { Space } from 'antd';
import { Col, Row } from 'antd';
import ThemeToggleButton from "./themeToggle";
import {
	ConfigProvider,
	Switch,
    Layout, Typography
} from "antd";
const { Text, Link, Title } = Typography;
const siderStyle = {
    whiteSpace: 'pre',
  };
const TopBar = (props) => {
    var text = " Github Searcher \n hello";
    return ( 
        <Space align="top">
            <GithubFilled style={{ fontSize: '46px', color:props}} />
           
                <Title level={5}>Github Search</Title>
                {/* <Text>Search users, repositories and issues</Text> */}
               
            
            {/* <ThemeToggleButton/> */}
            </Space>

        
        
     );
}
 
export default TopBar;