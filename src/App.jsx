import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Add from './Add'
import Transaction from './Transaction'

export const dataContext = createContext()

export default function App() {
  const [transaction,setTransaction]=useState([])
  const[addtotal,setAddtotal]=useState(0)
  const[expensetotal,setExpensetotal]=useState(0)

  return (
    <>
      <dataContext.Provider value={{transaction,setTransaction,addtotal,setAddtotal,expensetotal,setExpensetotal}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/add' element={<Add />} />
            <Route path='/transaction' element={<Transaction />} />
          </Routes>
        </BrowserRouter>
      </dataContext.Provider>
    </>
  )
}


