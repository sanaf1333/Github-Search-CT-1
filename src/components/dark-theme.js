import React from "react";
import {
	ConfigProvider,
	Switch,
    Layout
} from "antd";
import { useState } from "react";
import * as lightTheme from "../ant-tokens/light.json";
import * as darkTheme from "../ant-tokens/dark.json";

const ThemeChanger = () => {
    const [dark, setDark] = useState(false);
	const handleChecked = (checked) => {
		if (checked) setDark(false);
		else setDark(true);
	};
    return ( 
        <ConfigProvider
            theme={{
                token: dark ? darkTheme : lightTheme,
            }}>
       <Layout
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
				}}
			>
            
                <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={handleChecked} />
            
            
                </Layout>
        </ConfigProvider>
     );
}
 
export default ThemeChanger;