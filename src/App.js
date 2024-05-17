
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider'
import { Box } from "@mui/material";
import DetailedView from './component/detail/DetailedView';
import Cart from './component/cart/Cart';


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFashion } from './redux/actions/productFashionActions';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './component/payment/Payment';
import FashionMain from './component/fashion/FashionMain';
import MobileMain from './component/mobile/MobileMain';
import Footer from './component/footer/Footer';
import { getLikes } from './redux/actions/likeAction.js';
import MobileDetails from './component/mobile/MobileDetails';
import ResetPassword from './component/PasswordReset/ResetPassword';
import ForgotPassword from './component/PasswordReset/ForgotPassword';
function App() {
  const { fashion } = useSelector(state => state.getFashion);
  const { mobile } = useSelector(state => state.getLikes);
  // console.log(mobile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFashion());
    dispatch(getLikes());
  }, [dispatch])     // [] component dead mount condition


  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "67px" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailedView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/fashion' element={<FashionMain fashions={fashion} />} />
            <Route path='/mobile' element={<MobileMain mobile={mobile} />} />
            <Route path='/mobile/mobile/:id' element={<MobileDetails />} />
            <Route path='/password-reset' element={<ResetPassword />} />
            <Route path='/forgotpassword/:id/:token' element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
