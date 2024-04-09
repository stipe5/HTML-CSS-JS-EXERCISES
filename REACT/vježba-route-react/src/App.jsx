import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './pages/blog'
import { Layout } from './components/layout'
import { Page } from './pages/Page'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/contact' element={<Page title={"Contact"}/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='hugo' element={<Home/>}/>
          <Route path='/privacy-policy' element={<Page title={"Privacy Policy"}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
