import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Nav from '../components/common/Nav';
import Cart from '../pages/Cart';
import ItemList from '../pages/Itemlist';
import { observer } from 'mobx-react';
import MsgAlert from '../components/common/msgAlert';
import useStore from '../store/useStore';

function Router() {
  const { msgAlert } = useStore();

  return (
    <BrowserRouter>
      {msgAlert.view ? <MsgAlert /> : null}
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<ItemList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default observer(Router);
