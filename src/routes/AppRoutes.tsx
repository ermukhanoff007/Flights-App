import { MainPage } from '@/pages/main-page/ui/MainPage'
import {LoginPage} from "@/pages/LoginPage"
import {RegisterPage} from  "@/pages/RegisterPage"
import React from 'react'
import { Route, Routes } from 'react-router-dom' 

export const AppRoutes : React.FC = () => {
  return (
      <Routes>
        <Route path = "/" element = {<MainPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/register" element = {<RegisterPage/>}/>
      </Routes>
  )
}
