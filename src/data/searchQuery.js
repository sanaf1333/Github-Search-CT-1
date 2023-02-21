import React from "react";
import axios from "axios";
import CardLayout from "../components/card";
const FetchData = (props) => {
    const url='https://api.github.com/'+props;
   return axios.get(url)
          .then((response) => {
            //const data = response.data
            console.log(response.data)
            CardLayout(response.data);
            console.log(response.data.followers);
            
});

  }
 
export default FetchData;