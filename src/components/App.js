import React, {Component, Suspense, lazy, useState}  from 'react';
import SearchandDropdown from './searchbar';
//const SearchandDropdown = lazy(() => import('./searchbar'));
import TopBar from './topBar';
import { Provider } from 'react-redux';
import store from '../redux-store/store.js';
import {
	ConfigProvider,
	Switch,
    Layout, Typography
} from "antd";
import * as lightTheme from "../ant-tokens/light.json";
import * as darkTheme from "../ant-tokens/dark.json";
const { Text, Link, Title } = Typography;
const { Content } = Layout;
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
                <Provider store={store}>
                <Layout
                style={{
                    height: scrollHeight,                   
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection:"row",
                        justifyContent: "space-between",
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
                </Provider>
        </ConfigProvider>       
        )    
}
export default App;