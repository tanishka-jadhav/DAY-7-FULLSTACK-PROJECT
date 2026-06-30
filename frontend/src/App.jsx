import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
