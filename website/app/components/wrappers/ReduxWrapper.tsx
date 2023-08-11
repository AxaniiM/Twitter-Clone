'use client'
import { Provider } from "react-redux";
import store from "../../store/store";
import React, { ReactNode } from 'react'
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store)

 const ReduxWrapperProvider = ({children}:{children:ReactNode}) => {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>
    
  )
}

export default ReduxWrapperProvider
