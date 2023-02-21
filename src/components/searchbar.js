import React from 'react';
import { Input } from 'antd';
import { Select, Space } from 'antd';
import FetchData from '../Data/searchQuery';
import { useState } from 'react';
import CardLayout from './card';
//if we call it in compnentdid mount it will get more queries
//not using last letter

const SearchandDropdown = () => {
    let val;
        const [cardData, setCardData]=useState({});
        const [searchInput,setSearchInput]=useState('');
        const [dropdownValue, setDropdownValue]=useState('users');
        function handleChange(value){
            setDropdownValue(value);
            console.log(dropdownValue);
            console.log(`selected ${value}`);
            if(searchInput.length>3){
                const url=`${value}/${searchInput}`;
                const result=FetchData(`${value}/${searchInput}`);
                console.log(result);
            }
        }
        function handleChange1(e){
            setSearchInput(e.target.value);
            if(e.target.value.length>3){
                const url=`${dropdownValue}/${e.target.value}`;
                console.log("handle change 1");
                const result1=FetchData(`${dropdownValue}/${e.target.value}`);

                console.log(result1);
                result1.then(function(response) {
                        console.log(response.data);
                        //a=response.data;
                        //console.log(a);
                        val=response.data;
                        setCardData(response.data);
                        console.log(val);
                      }
                ).then(function(){
                    //setCardData(response.data);
                    console.log("card data");
                    console.log(cardData);
                    console.log(val.followers);
                    CardLayout(val);
                }                   
                );
                
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
                       <div>you wrote : {cardData.followers}</div>
                        {CardLayout(cardData)}
            </div>
         );
    }
     
export default SearchandDropdown;
