import { Badge, Box, styled, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from "./Profile";

import { DataContext } from "../../context/DataProvider";

// component
import LoginDialog from "../login/LoginDialog";

const ButtonLogin = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //     display: 'block',
    // }
}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: 'auto',
    justifyContent: 'space-around',
    aligItems: 'center',


    [theme.breakpoints.down('md')]: {
        display: 'inline',
        textAlign: 'start',
        cursor: 'pointer',
    }
}))

const CartButton = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    color: inherit;
`



const CustomButton = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const { cartItem } = useSelector(state => state.cart);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            <Typography style={{ display: 'flex', alignItems: 'center' }}>Become a Seller</Typography>
            <ButtonLogin style={{ marginLeft: "20px" }}>
                <Typography>More</Typography>
                <KeyboardArrowDownIcon />
            </ButtonLogin>



            <CartButton style={{ marginLeft: "20px" }} to="/cart">
                <Badge badgeContent={cartItem?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </CartButton>

            {
                account ? <Profile account={account} setAccount={setAccount} /> :

                    <Button
                        variant="contained" style={{ marginLeft: "20px" }}
                        onClick={() => openDialog()}
                    >Log In
                    </Button>
            }
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButton;