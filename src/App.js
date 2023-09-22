import { Routes, Route } from 'react-router-dom'
import Home from './Containers/Home';
import Product from './Containers/Product';
import Header from './Components/Header'
import Cart from './Containers/Cart';


function App() {
  return (
    <main className="App">
      <Header/>
    <Routes>        
       <Route path='/*' element={<Home/>}  />
       <Route path='/product/:userID' element={<Product/>} />
       <Route path='/cart' element={<Cart/>}  />  
    </Routes>
    </main>
  );
}

export default App;
