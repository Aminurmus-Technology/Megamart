import './App.css'
import Footer from "./Pages/Footer"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Grocery from './Pages/Grocery'
import LandingPage from './Pages/LandingPage'
import FashionPage from './Pages/FashionPage'
import MensPage from './Pages/MensPage'
import { Routes,Route } from 'react-router-dom'
import WomenPage from './Pages/WomensPages'
import KidsPages from './Pages/KidsPages'
import GroceryPages from './Pages/Grocery'
import ProductDetail from './Pages/ProductDetail'
import BeautyLandingPg from './Pages/beautyLandingPg'
import OrderConfirmation from './Pages/OrderConfirmation'
import GroceryItemPage from './Pages/GroceryItemPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/fashion' element={<FashionPage/>}/>      
      <Route path='/category/men' element={<MensPage/>}/>  
      <Route path='/category/women' element={<WomenPage/>}/>  
      <Route path='/category/baby-kids' element={<KidsPages/>}/>  
      <Route path='/grocery' element={<GroceryPages/>}/> 
      <Route path='/beauty-landing' element={<BeautyLandingPg/>}/> 
      <Route path="/product/:id" element={<ProductDetail />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/SignUp" element={<Signup />} /> 
      <Route path="/cart" element={<OrderConfirmation />} /> 
      <Route path="/grocery/items" element={<GroceryItemPage />} /> 
    </Routes>
    <Footer bgColor="#D5006D" />
    </>
  )
}
