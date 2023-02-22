import React, {Component, Suspense, lazy, useState}  from 'react';
import SearchandDropdown from './searchbar';
//const SearchandDropdown = lazy(() => import('./searchbar'));
import TopBar from './topBar';
import { Card, Space } from 'antd';
import { Col, Row} from 'antd';
import ThemeChanger from './dark-theme';
import {
	ConfigProvider,
	Switch,
    Layout, Typography
} from "antd";
import * as lightTheme from "../ant-tokens/light.json";
import * as darkTheme from "../ant-tokens/dark.json";
const { Text, Link, Title } = Typography;
//import { startTransition } from 'react';
//lazy loading not working. errorrrrrrr
//multiple results
//multiple cards map
//dark theme
//move dark theme to app but change app to functional component?
const App = () => {
    const [dark, setDark] = useState(false);
	const handleChecked = (checked) => {
		if (checked) setDark(false);
		else setDark(true);
	};
   const logocolor=dark? "white":"black";
        return(
            <Layout
            style={{height:"100vh"}}>
            <ConfigProvider
            theme={{
                token: dark ? darkTheme : lightTheme,
            }}>
       <Layout
				style={{
					display: "flex",
                    flexDirection:"row",
					//alignItems: "center",
					justifyContent: "space-between",
					//height: "100vh",
				}}
			>
                  
               {TopBar(logocolor)}              
                <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={handleChecked}
                 />                
                  </Layout>
                {/* <Col>
                <Row justify={"space-around"} align={"middle"} gutter={[36,36]}> */}
                <Layout
                style={{
					
					//alignItems: "center",
                    //justifyContent:"start"
					//justifyContent: "center",
					
				}}>
               
                {/* <TopBar/> */}
                {/* </Row> */}
                {/* <Row justify={"space-around"} align={"middle"} gutter={[16,16]}> */}
                    
                {/* <div>
                    <Suspense fallback = { <div> Please Wait... </div>} >
                    <SearchandDropdown/></Suspense>
                </div>  */}
                <SearchandDropdown/>
                </Layout>
                {/* </Row>
                </Col> */}
               
                
                
        </ConfigProvider>
        </Layout>
        )
    
}
export default App;