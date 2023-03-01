import React from 'react'
import "./SearchPage.css"
import { Button } from '@mui/material';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchpage'>
        <div className='searchPage_info'>
            <p>62 stays 26 august to 30 august 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
        </div>
        <SearchResult 
         img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
         location="Private room in center of London"
         title="Stay at this spacious Edwardian House"
         description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
         star={4.73}
         price="30€ / night"
         total="117€ total"/>
          <SearchResult 
         img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
         location="Private room in center of London"
         title="Stay at this spacious Edwardian House"
         description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
         star={4.73}
         price="30€ / night"
         total="117€ total"/>
    </div>
  )
}

export default SearchPage