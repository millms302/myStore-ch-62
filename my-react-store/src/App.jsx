import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Catalog from './pages/Catalog.jsx';

function App() {


  return (
    <BrowserRouter>
     <div className="App">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/catalog' element={<Catalog/>}  />
          
        </Routes>
      </main>

      <Footer />
     </div>
    </BrowserRouter> 
  )
}

export default App
