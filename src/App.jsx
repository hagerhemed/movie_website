import React from 'react'
import Form from './components/Form/Form.jsx'
import { TodoWrapper } from './components/Todo/TodoWrapper.jsx'
import Nav from './components/Nav/Nav.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Movie from './components/Movie/Movie.jsx'
import Favorite from './components/Favorite/Favorite.jsx'
import Register from './components/Register/Register.jsx'
import Details from './components/Details/Details.jsx'
import { LanguageContextProvider } from './components/LanguageContext/LanguageContext.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import Footer from './components/Footer/Footer.jsx'



function App() {
  return(
    <div className="app">
      <BrowserRouter>
      <LanguageContextProvider>
      <Provider store={store} >
        <>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie" element={<Movie/>}></Route>
        <Route path="/favorite" element={<Favorite/>}></Route>
        <Route path="/login" element={<Form/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
      </Routes>
      </>
      </Provider>
      </LanguageContextProvider>
      <Footer/>
      </BrowserRouter>
  
    </div>
  )
}

export default App

