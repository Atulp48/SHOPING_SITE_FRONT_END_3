
import { Box, Typography, styled, TableCell, Table, TableBody, TableRow } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const StyledBadge = styled(Badge)`
    font-size: 15px;
    margin-top: 10px;
    color: green;
`

const Discount = styled(Box)`
    vertical-align: baseline;
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
        vertical-align: baseline;
    &>td{
        font-size: 14px;
        border: none;
    }
`
const ProductDetails = ({ product }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    let shippingcharge = 0;
    if (product.ShippingCharge == "1")
        shippingcharge = 40;

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.cost}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388e3c" }}>{product.price.discount}</Box>
            </Typography>
            <Discount>
                <Typography><StyledBadge />Buy 2 Get 5% Off, Buy 3 Get 10% Off</Typography>
                <Typography><StyledBadge />5% Instant Discount + Upto 5% Back on Amazon Pay ICICI Bank Credit Card Trxns. Min purchase value INR 2500</Typography>
                <Typography><StyledBadge />10% Instant Discount up to INR 750 on ICICI Bank Debit Card Trxns. Min purchase value INR 2500</Typography>
                <Typography><StyledBadge />10% Instant Discount up to INR 1000 on ICICI Bank Credit Card Trxns. Min purchase value INR 2500</Typography>
                <Typography><StyledBadge />10% Instant Discount up to INR 1250 on ICICI Bank Credit Card EMI Trxns. Min purchase value INR 2500</Typography>
            </Discount>
            <Table style={{ marginTop: '30px' }}>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell>Deliver by {date.toDateString()} | Shipping Charge - ₹{shippingcharge}</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>1 year Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Discription</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails;