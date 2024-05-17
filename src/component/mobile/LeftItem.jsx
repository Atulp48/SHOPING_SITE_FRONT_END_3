
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { Box, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';
// import Payment from '../payment/Payment';

import { useState } from 'react';
const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',

    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px',
        alignItem: 'center',
    }

}))

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '45%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
    }

}))



const LeftItem = ({ mobile }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const { id } = mobile;

    const addItemToCart = () => {

        dispatch(addToCart(id, quantity));

        navigate('/cart');
    }

    const buyNow = () => {
        // let response = payUsingPaytm({ amount: 500, email: 'ajayverma@123gmail.com' });
        // let information = {
        //     action: 'https://securegw-stage.paytm.in/order/process',
        //     params: response
        // }
        // post(information);

        navigate('/payment');
    }
    return (
        <LeftContainer>
            <Box style={{ display: 'flex', padding: '15px 20px', width: '90%', marginBottom: '10px', justifyContent: 'center' }}>
                <Image src={mobile.url} alt="product" style={{ width: '50%' }} />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: '12px', background: '#ff9f00' }}> <Cart />Add to cart</StyledButton>
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb541b' }}><Flash /> Buy now</StyledButton>
        </LeftContainer>
    )
}

export default LeftItem;