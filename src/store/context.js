import React, { createContext, useContext } from 'react';

const StoreMyContext = createContext();

const StoreProvider = (props) => {

    return(
        <StoreMyContext.Provider value={{name: "hellooo"}}>

            {props.children}

        </StoreMyContext.Provider>
    )
}

const ContextStoreUser = () => useContext(StoreMyContext);

export { StoreProvider, ContextStoreUser };


