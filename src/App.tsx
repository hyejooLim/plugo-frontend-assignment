import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import ScrollToTop from './utils/scrollToTop';
import './styles/global.css';

const Home = loadable(() => import('../src/pages/Home'));
const Products = loadable(() => import('../src/pages/Products'));
const NewArrivals = loadable(() => import('../src/pages/NewArrivals'));
const Category = loadable(() => import('../src/pages/Category'));
const Detail = loadable(() => import('../src/pages/Detail'));
const Cart = loadable(() => import('../src/pages/Cart'));
const Manage = loadable(() => import('../src/pages/Manage'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
