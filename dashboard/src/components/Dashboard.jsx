import React from 'react';
import Watchlist from './watchlist';
import Order from './order';
import Holdings from './holdings';
import Positions from './positions';
import Apps from './apps';
import Summary from './Summary';
import Funds from './funds';
import {Routes, Route} from 'react-router-dom';

function Dashboard() {
    return ( 
        <div className='dashboard-container'>
            <Watchlist />
            <div className='content'>
                <Routes>
                    <Route exact path="/" element={<Summary />}></Route>
                    <Route path="/orders" element={<Order />}></Route>
                    <Route path="/holdings" element={<Holdings />}></Route>
                    <Route path="/positions" element={<Positions />}></Route>
                    <Route path="/funds" element={<Funds />}></Route>
                    <Route path="/apps" element={<Apps />}></Route>

                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;