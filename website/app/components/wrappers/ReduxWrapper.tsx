'use client'
import { Provider } from "react-redux";
import store from "../../store";
import React, { ReactNode } from 'react'


 const ReduxWrapperProvider = ({children}:{children:ReactNode}) => {
  return (
    
    <Provider store={store}>
    {children}
    </Provider>
    
  )
}

export default ReduxWrapperProvider
