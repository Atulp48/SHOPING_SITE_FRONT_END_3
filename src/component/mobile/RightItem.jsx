
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
const RightItem = ({ mobile }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <>
            <Typography style={{ fontSize: 30 }}>{mobile.title}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{mobile.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#878787" }}><strike>₹{mobile.price.cost}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: "#388e3c" }}>{mobile.price.discount}</Box>
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
                        <TableCell>Deliver by {date.toDateString()} | Shipping Charge - ₹0</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>1 year Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Discription</TableCell>
                        <ColumnText style={{ display: 'flex', flexDirection: 'column' }}>
                            <TableCell>{mobile.description.des1}</TableCell>
                            <TableCell>{mobile.description.des2}</TableCell>
                            <TableCell>{mobile.description.des3}</TableCell>
                            <TableCell>{mobile.description.des4}</TableCell>
                        </ColumnText>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default RightItem;