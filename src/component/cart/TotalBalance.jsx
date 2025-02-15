import { Box, Typography, styled } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";



const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0; 
`
const Heading = styled(Typography)`
    color: #878787;
`

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    &>p{
        margin-bottom: 20px;
        font-size: 14px; 
    }
`
const Price = styled(Box)`
    float: right;
`

const TotalBalance = ({ cartItem }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItem])

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItem.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>price ({cartItem?.length} item)
                    <Price component="span">₹ {price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">- ₹ {discount}</Price>
                </Typography>
                <Typography>Delivary Charge
                    <Price component="span">₹ 40</Price>
                </Typography>
                <Typography>Total Amount
                    <Price component="span">₹{price - discount + 40} </Price>
                </Typography>
                <Typography>You save ₹{discount - 40} on this order</Typography>
            </Container>
        </Box>
    )
}

export default TotalBalance;