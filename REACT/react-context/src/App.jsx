import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { CustomForm } from './components/Form.jsx'
import { AppContext } from './context/UserContext.jsx'
import { ProductComponent } from './components/ProductComponent.jsx'


function App() {

  const initalUser = {
    id: 1,
    email: "iam@hacker.com",
    name: "Otto Mate",
    username: "otto"
  }

  const [user, setUser] = useState(initalUser);
  const [basket, setBasket] = useState({items: []});

  const appContextValues = {user, setUser, basket, setBasket};

  return (
    <>
      <AppContext.Provider value={appContextValues}>
        <div>
          <Header />
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2> React Context API</h2>
        <CustomForm />
        <ProductComponent/>
      </AppContext.Provider>
      
    </>
  )
}

export default App
