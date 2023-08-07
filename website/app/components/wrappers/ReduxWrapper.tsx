'use client'
import { Provider } from "react-redux";
import store from "../../store";
import { apiSlice } from "../../api/postApiSlice";
import React, { ReactNode } from 'react'
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

 const ReduxWrapperProvider = ({children}:{children:ReactNode}) => {
  return (
    
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
    {children}
    </ApiProvider>
    </Provider>
    
  )
}

export default ReduxWrapperProvider
