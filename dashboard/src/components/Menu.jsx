import React, { useState } from 'react';
import {Route, Routes, Link} from 'react-router-dom'

function Menu() {

    const [selectedMenu, setSelectedMenu]=useState(0);
    const[profileDropdownMenu,setProfileDropdownMenu]=useState(false);

    const handleClick=(index)=>
    {
        setSelectedMenu(index);
    }

    const toggleProfileDropdownMenu=()=>{
        setProfileDropdownMenu(!profileDropdownMenu);
    }
    const menuClass= "menu";
    const activeMenuClass="menu selected";



    return ( 
        <div className='menu-container'>
            <img src="./logo.png" style={{width:"50px"}}></img>
            <div className='menus'>
                <ul>
                    <li>
                    <Link to="/" style={{textDecoration:"none"}} onClick={()=>handleClick(0)}>
                        <p className={selectedMenu === 0 ? activeMenuClass :menuClass}>Dashboard</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/orders" style={{textDecoration:"none"}} onClick={()=>handleClick(1)}>
                        <p className={selectedMenu === 1 ? activeMenuClass :menuClass}>Orders</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/holdings" style={{textDecoration:"none"}} onClick={()=>handleClick(2)}>
                        <p className={selectedMenu === 2 ? activeMenuClass :menuClass}>Holdings</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/positions" style={{textDecoration:"none"}} onClick={()=>handleClick(3)}>
                        <p className={selectedMenu === 3 ? activeMenuClass :menuClass}>Positions</p>
                    </Link>
                    </li>
                    <li>
                   <Link to="/funds" style={{textDecoration:"none"}} onClick={()=>handleClick(4)}>
                        <p className={selectedMenu === 4 ? activeMenuClass :menuClass}>Funds</p>
                    </Link>
                    </li>
                    <li>
                    <Link to="/apps" style={{textDecoration:"none"}} onClick={()=>handleClick(5)}>
                        <p className={selectedMenu === 5 ? activeMenuClass :menuClass}>Apps</p>
                    </Link>
                    </li>
                </ul>
                <hr />
                <div className='profile' onClick={toggleProfileDropdownMenu}>
                    <div className='avatar'>ZU</div>
                    <p className='username'>USERID</p>
                </div>
            </div>
        </div>
     );
}

export default Menu;