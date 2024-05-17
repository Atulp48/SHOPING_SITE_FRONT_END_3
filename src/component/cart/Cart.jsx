import { Grid, Typography, Box, Button, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalBalance from "./TotalBalance";
import { useNavigate } from 'react-router-dom';

const GridWrapper = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    backgroundColor: '#f2f2f2',
    [theme.breakpoints.down("md")]: {
        padding: '10px',
    }
}))


const Header = styled(Typography)`
    padding: 15px 24px;
`
const ButtonWrapper = styled(Box)(({ theme }) => ({
    padding: '16px 22px',
    background: '#ffff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    borderTop: '1px solid #f0f0f0',
    [theme.breakpoints.down('md')]: {
        padding: '5px',
    }
}))


const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background-color: #fb641b;
    color: #fff;
    padding: 5px;
    width: 250px; 
    height: 51px;
`
const LeftGrid = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down("md")]: {
        paddingRight: 0,
    }

}))



const Cart = () => {
    const { cartItem } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const buyNow = () => {


        navigate('/payment');
    }
    return (
        <>
            {
                cartItem.length ?
                    <GridWrapper container>
                        <LeftGrid item lg={9} md={9} sm={12} xs={12}>
                            <Header style={{ background: '#ffffff' }}>
                                <Typography>Cart Item ( {cartItem.length})</Typography>
                            </Header>
                            {
                                cartItem.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={() => buyNow()}  >Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftGrid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItem={cartItem} />
                        </Grid>
                    </GridWrapper>
                    :
                    <EmptyCart />
            }
        </>
    )
}

export default Cart;