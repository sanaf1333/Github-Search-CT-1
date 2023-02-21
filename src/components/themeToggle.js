import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';
const ThemeToggleButton = () => (
  <Space >
    <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked />
    
  </Space>
);
export default ThemeToggleButton;