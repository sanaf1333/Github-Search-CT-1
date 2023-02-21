import React from 'react';
import { Input } from 'antd';
import { Select, Space } from 'antd';
import FetchData from '../Data/searchQuery';
import { useState } from 'react';
//if we call it in compnentdid mount it will get more queries
//not using last letter

const SearchandDropdown = () => {
        
        const [searchInput,setSearchInput]=useState('');
        const [dropdownValue, setDropdownValue]=useState('users');
        function handleChange(value){
            setDropdownValue(value);
            console.log(dropdownValue);
            console.log(`selected ${value}`);
            if(searchInput.length>3){
                const url=`${value}/${searchInput}`;
                FetchData(`${value}/${searchInput}`);
            }
        }
        function handleChange1(e){
            setSearchInput(e.target.value);
            if(e.target.value.length>3){
                const url=`${dropdownValue}/${e.target.value}`;
                FetchData(`${dropdownValue}/${e.target.value}`);
            }
            
        }
        return ( 
            <div>
                <Space>
                    <Input placeholder="Enter keywords" onChange={handleChange1} />
                  
                    <Select
                        defaultValue="users"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'users',
                            label: 'users',
                            },
                            {
                            value: 'repositories',
                            label: 'repositories',
                            },
                            {
                            value: 'issues',
                            label: 'issues',
                            },
                        ]}
                        />
                        <div>you wrote : {searchInput}</div>
                       </Space>
            </div>
         );
    }
     
export default SearchandDropdown;
