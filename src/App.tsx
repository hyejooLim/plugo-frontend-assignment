import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import NewArrivals from './pages/NewArrivals';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Manage from './pages/Manage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/manage' element={<Manage />} />
      </Routes>
    </Router>
  );
};

export default App;
