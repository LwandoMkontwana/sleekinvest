import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stocks from './Stocks';

const BrowseStocks = () => {
    const API_KEY = 'https://localhost:7131/api/Stocks'
    const [stocks, setStocks] = useState([]);


    useEffect(() => {
        axios.get(API_KEY).then(res => {
          setStocks(res.data);
          console.log(res.data);
        }).catch(error => alert('error'));
    }, []);

    return (
        <div>
           
        </div>
    )
}

export default BrowseStocks
