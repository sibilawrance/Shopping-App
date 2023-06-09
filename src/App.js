import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/cart' Component={Cart}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
 