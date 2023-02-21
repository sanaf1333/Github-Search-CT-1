import React, { useState } from "react";
import axios from "axios";
import CardLayout from "../components/card";
const FetchData = (props) => {
    const url='https://api.github.com/'+props;
    
   return axios.get(url);
    
  }
 
export default FetchData;