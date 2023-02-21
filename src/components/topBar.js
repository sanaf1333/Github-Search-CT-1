import React from "react";
import { GithubFilled } from '@ant-design/icons';
import { Space } from 'antd';
import { Col, Row } from 'antd';
import ThemeToggleButton from "./themeToggle";
const TopBar = () => {
    var text = " Github Searcher \n hello";
    
    return ( 
        <Space >
            <GithubFilled style={{ fontSize: '46px'}} />
            <div style={{whiteSpace: "pre"}}>
               <div>Github Searcher</div> 
               <div>Search users, repositories and issues below</div> 
            </div>
            <ThemeToggleButton/>
        </Space>

        
        
     );
}
 
export default TopBar;