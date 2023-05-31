import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Header } from './component/Header'
import { Single } from './Pages/Single'
import { Category } from './Pages/Category'
import { AddProduct } from './Pages/AddProduct'
import { Login } from './Pages/Login'

const App = () => {
  return (
    <>
    <Header />


      <Routes>
        
        <Route index element={<Home />} />
        <Route path='single/:id' element={<Single />} />
        <Route path='cate/:Category' element={<Category />} />
        <Route path='addProduct' element ={<AddProduct />} />
        <Route path='login' element={<Login />} />


      </Routes>


    </>
  )
}

export default App