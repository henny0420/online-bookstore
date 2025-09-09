import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './database'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Header from './component/header'
import Home from './pages/home'
import Layout from './component/layout'
import Signup from './pages/signup'
import Login from './pages/login/login'
import ForgetPassword from './pages/forgetpassword'
import Discription from './pages/discription'
import Userdetails from './pages/userdetails'
import UserTable from './pages/usertable'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Layout/>,
      children: [
        {
          path: '/home',
          element: <Home/>
        },
      ]
    },
    {
      path: '/discription/:id',
      element: <Discription />
    },
    {
      path : '/',
      element : <Signup/>
    },
    {
      path : '/login',
      element : <Login/>
    },
    {
      path : '/forgetpassword',
      element : <ForgetPassword/>

    },
    {
      path : '/userdetails',
      element : <Userdetails/>

    },
    {
      path : '/usertable',
      element : <UserTable/>

    }
  
  ])

  return (
    <>

      <RouterProvider router={router} />
      {/* <Data/> */}
      {/* <Form/> */}
    </>
  )
}

export default App
