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
//redux toolkit
//catch error in fetch api
//what if it results error? get error and empty screen
//import { startTransition } from 'react';
//lazy loading not working. errorrrrrrr
//multiple results
//multiple cards map
//youcant search repos without user and issue without repos
//display user and its repos and then user can open any repo
//query parameters
const App = () => {
    const [dark, setDark] = useState(false);
	const handleChecked = (checked) => {
		if (checked) setDark(false);
		else setDark(true);
	};
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
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
                    height: scrollHeight,
                    
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