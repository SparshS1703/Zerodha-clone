import React, { useState } from 'react';
import { watchlist } from '../data/data';
import {KeyboardArrowDown , KeyboardArrowUp} from '@mui/icons-material'

function Watchlist() {
    return ( 
        <div className='watchlist-container'>
            <div className='search-container'>
                <input type="text" name="search" id="search" placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx' className='search'></input>
                <span className='counts'>{watchlist.length}/50</span>

            </div>
            <ul className='list'>
                {watchlist.map((stock, index)=>{
                //    return ( <p>{stock.name}</p>)
                   return ( <WatchListItem stock={stock} key={index} />)
                   
                })}

            </ul>
        </div>
     );
}


const WatchListItem = ({stock})=>{
    const [showWatchListActions,setShowWatchListActions] = useState(false);

    const handleMouseEnter = ()=>{
        setShowWatchListActions(true);
    }
    const handleMouseLeave = ()=>{
        setShowWatchListActions(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown?"down":"up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="down" />}
                    <span className='price'>{stock.price}</span>
                </div>
            </div>
        </li>
    )

}


export default Watchlist;