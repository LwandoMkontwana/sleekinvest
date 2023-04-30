import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Stocks from './Stocks';


const Browse = () => {
    const API_KEY = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        axios.get(API_KEY).then(res => {
          setStocks(res.data);
          console.log(res.data);
        }).catch(error => alert('error'));
    }, []);

    const handleChange = (e) => {
      setSearch (e.target.value);
    }

    const filteredStocks = stocks.filter (stock =>
      stock.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
  <div className='section-center featured-center'>
      <div className='browse-stocks'>     
      <div className = 'stock-search'>
          <h1 style={{ display: 'flex', position: 'inherit', padding: '0', margin: '100'}}>Search a stock </h1>
             <Box style={{marginTop:''}}>
                 <TextField fullWidth label="search stocks..." id="fullWidth" onChange={handleChange} />
             </Box>
      </div>  
      {filteredStocks.map(stock => {
        return  (
          <Stocks key={stock.id} 
          name = {stock.name}
          image = {stock.image}
          symbol = {stock.symbol}
          volume = {stock.market_cap}
          price = {stock.current_price}
          />
        )
      })}
      </div>
  </div>
  )
}

export default Browse


