import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        {/* <Route path="/Login-Page" element={<LoginPage/>} /> */}

        </Route>
      </Routes>
  )
}

export default App
