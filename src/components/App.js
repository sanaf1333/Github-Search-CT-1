import React, {Component, Suspense, lazy, useState}  from 'react';
import SearchandDropdown from './searchbar';
//const SearchandDropdown = lazy(() => import('./searchbar'));
import TopBar from './topBar';
import {
	ConfigProvider,
	Switch,
    Layout, Typography
} from "antd";
import * as lightTheme from "../ant-tokens/light.json";
import * as darkTheme from "../ant-tokens/dark.json";
const { Text, Link, Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
//import { startTransition } from 'react';
//lazy loading not working. errorrrrrrr
//multiple results
//multiple cards map
const App = () => {
    const [dark, setDark] = useState(false);
	const handleChecked = (checked) => {
		if (checked) setDark(false);
		else setDark(true);
	};
   const logocolor=dark? "white":"black";
        return(
            
            <ConfigProvider
            theme={{
                token: dark ? darkTheme : lightTheme,
            }}>
                <Layout
                style={{
                   // display: "flex",
                   // flexDirection:"column",
                    height: "100vh",
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection:"row",
                        //alignItems: "center",
                        justifyContent: "space-between",
                        //height: "100vh",
                        padding:"10px"
                        
                    }}
			    >
                  
               {TopBar(logocolor)}              
                    <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={handleChecked}
                    />                
                </div>
                <Layout
                style={{
                    padding:"20px",
                }}>
                <SearchandDropdown/>
                </Layout>
                
               
               
                
                </Layout>
        </ConfigProvider>
        
        )
    
}
export default App;