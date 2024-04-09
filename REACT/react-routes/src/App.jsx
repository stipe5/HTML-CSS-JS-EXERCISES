import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog.jsx'
import { Contact } from './pages/Contact.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import { Layout } from './components/Layout.jsx'
import { Page } from './components/Page.jsx'
import { BlogPost } from './components/BlogPost.jsx'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Page title={"Home Page"} />} />
            <Route path="/blog" element={<Blog />}>
              <Route path='/blog/:id' element={<BlogPost/>}/>
            </Route>
            <Route path='/contact' element={<Page title={"Contact"} />} />
            <Route path='/hugo' element={<Page title={"Hugo Page"} />} />
            <Route path='/privacy-policy' element={<Page title={"Privacy Policy"}/>} />
            <Route path="*" element={<Page title={"404 - Page not found"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
