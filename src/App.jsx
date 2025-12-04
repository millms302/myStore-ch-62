import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalProvider from './state/globalProvider.jsx';

import Home from "./pages/Home"
import About from "./pages/About"; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import Catalog from './pages/Catalog.jsx';
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <GlobalProvider>
    <BrowserRouter>
     <div className="App">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/catalog' element={<Catalog/>}  />
          <Route path='/admin' element={<Admin/>} />
          <Route path='*' element={<NotFound/>} />
          
        </Routes>
      </main>

      <Footer />
     </div>
    </BrowserRouter> 
  </GlobalProvider>
  )
}

export default App
