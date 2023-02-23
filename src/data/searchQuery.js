import React, { useState } from "react";
import axios from "axios";
import CardLayout from "../components/CardLayout";
const FetchData = (props) => {
    const url='https://api.github.com/search/'+props;
    const url1='https://api.github.com/orgs/ORG/'+props+'?per_page=2';
   return axios.get(url);
    
  }
 
export default FetchData;