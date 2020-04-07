import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'

export default function PageRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    );
}