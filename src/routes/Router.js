import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../components/common/Nav';
import Cart from '../pages/Cart';
import ItemList from '../pages/Itemlist';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<ItemList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
