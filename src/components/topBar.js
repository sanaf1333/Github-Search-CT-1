import React from "react";
import { GithubFilled } from '@ant-design/icons';
import { Space } from 'antd';
const TopBar = (props) => {
    var text = " Github Searcher \n hello";
    return ( 
        <Space align="start">
            <GithubFilled style={{ fontSize: '46px', color:props}} />
           
            <div style={{whiteSpace:"pre", color:props}}>
                <div style={{fontFamily:"fantasy", fontSize:"20px", paddingTop:"6px"}}>Github Search</div>
                <div>Search users, repositories and issues</div>
            </div>
            </Space>
        
     );
}
 
export default TopBar;