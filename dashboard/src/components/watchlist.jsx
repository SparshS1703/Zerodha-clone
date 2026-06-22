import React, { useState } from 'react';
import { watchlist } from '../data/data';
import { Tooltip, Grow } from "@mui/material";
import {KeyboardArrowDown , KeyboardArrowUp, BarChartOutlined,
  MoreHoriz} from '@mui/icons-material'

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
            {showWatchListActions && <WatchListActions uid={stock.name}/>}
        </li>
    )

}

const WatchListActions = ({ uid }) => {
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     generalContext.openBuyWindow(uid);
//   };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default Watchlist;