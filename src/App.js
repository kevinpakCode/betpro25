import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Public from './components/layouts/public'
import Home from './pages/public/home/home'
import Page404 from './pages/404'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public/>}>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App