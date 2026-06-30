import React from 'react';
import BuyActionWindow from './buyActionWindow';
import { useState } from 'react';


    const GeneralContext=React.createContext({
        openBuyWindow:(uid)=>{},
        closeBuyWindow:()=>{}
    });
    
    export const GeneralContextProvider=(props)=>{
        const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
        const [selectedStockID,setSelectedStockID]=useState("");
        const handleOpenBuyWindow=(uid)=>{
            setIsBuyWindowOpen(true);
            console.log(uid);
            
            setSelectedStockID(uid);
        }

        const handleCloseBuyWindow=()=>{
            setIsBuyWindowOpen(false);
            setSelectedStockID("");
        }
    


    return ( 
        <GeneralContext.Provider value={{openBuyWindow:handleOpenBuyWindow,
            closeBuyWindow:handleCloseBuyWindow
        }}>
            {props.children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockID} />}
        </GeneralContext.Provider>
     );
}

export default GeneralContext;