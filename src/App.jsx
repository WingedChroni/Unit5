import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Checkout from './Pages/Checkout/Checkout'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LikesContextProvider from './context/LikesContext'


function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <LikesContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/product/:productId/details' element={<ProductDetails/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </LikesContextProvider>
    </BrowserRouter>
  )
}

export default App
