import React from 'react';
import { Input } from 'antd';
import { Select, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,clearResults } from '../redux-store/resultSlice';
import { setSearch,setDropdown } from '../redux-store/store';
const ResultCards = React.lazy(() => import('./result-cards'));
import useDebouncedCallback from './debounce';
import "../styles/cards.css"
const SearchandDropdown = () => {
    
        const dispatch = useDispatch();
        const [searchInput,setSearchInput]=useState('');
        const [dropdownValue, setDropdownValue]=useState('users');
        const handleSearchInput = useDebouncedCallback((value) => {
            dispatch(setSearch(value));
            dispatch(setDropdown(dropdownValue));
            if (value.length >= 3) {
              const url = `${dropdownValue}?q=${value}`;
              dispatch(fetchProducts(url));
            } else {
              dispatch(clearResults());
            }
          }, 500); 
          const handleSearchDropdown = useDebouncedCallback((value) => {
            dispatch(setSearch(searchInput));
            dispatch(setDropdown(dropdownValue));
            if (searchInput.length >= 3) {
              const url = `${value}?q=${searchInput}`;
              dispatch(fetchProducts(url));
            } else {
              dispatch(clearResults());
            }
          }, 500); 
          
        function handleChange(value){
            setDropdownValue(value);
            dispatch(setSearch(searchInput));
            dispatch(setDropdown(value));
            console.log(value);
            const url=`${value}?q=${searchInput}`;
            handleSearchDropdown(value);
            
        }
        function handleChange1(e){
            setSearchInput(e.target.value);
            dispatch(setSearch(e.target.value));
            dispatch(setDropdown(dropdownValue));
            const url=`${dropdownValue}?q=${e.target.value}`;                
            handleSearchInput(e.target.value);
        }
        const { data: results, status } = useSelector((state) => state.result);
        
        return ( 
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop: results.length ? '0px' : '100px'}}>
                <div>
                <Space direction='horizontal'>
                    <Input placeholder="Enter keywords" onChange={handleChange1} value={searchInput} />
                  
                    <Select
                        defaultValue="users"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        value={dropdownValue}
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
                       </Space>
                       </div>
                       <div style={{display:"flex", flexDirection:"row", paddingTop:"20px"}}>
                       <div>you wrote : {searchInput}</div>
                       
                      
                        </div>                  
                        <React.Suspense fallback={<div>Loading...........</div>}>
                        <ResultCards/>
                        </React.Suspense>
            </div>
         );
    }
     
export default SearchandDropdown;
