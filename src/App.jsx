import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Layout from './components/layout/Layout';
import Aboutpage from './pages/Aboutpage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>

        </Route>
      </Routes>
  )
}

export default App
