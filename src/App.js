import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home'
import Sidebar from './components/SideBar'

function App() {
  return (
    <>
      <Sidebar />
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
