import { Typography, Box, Button, styled } from "@mui/material";
import { useDispatch } from 'react-redux';
import { removeToCart } from "../../redux/actions/cartAction";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";


const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #ffffff;
`;
const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;
const RightBox = styled(Box)`
    margin-top: 20px;
`;


const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const removeItemFromCart = (id) => {
        dispatch(removeToCart(id));
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="cartItem" style={{ width: '120px' }} />
                <ButtonGroup />
            </LeftComponent>
            <RightBox>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Typography>Seller: RetailNet</Typography>
                <Typography style={{ marginTop: 10 }}>
                    <Box component="span" style={{ fontSize: 20, fontWeight: 600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.cost}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#388e3c" }}>{item.price.discount}</Box>
                </Typography>
                <Button onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </RightBox>
        </Component>
    )
}

export default CartItem;