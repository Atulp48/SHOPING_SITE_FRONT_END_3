
import { Button, Typography, styled, Box } from "@mui/material";

const Heading = styled(Box)`
font-size: 30px;
    color: #1565c0;
`

const Pay = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 100px 0;
    min-height: 55vh;
    
  `
const Repay = styled(Button)`
text-align:center;
font-weight: 600;
border: 1px solid black;
background: #1565c0;
color: #fff;
display: block; 
`


const Payment = () => {
    return (
        <Pay>
            <Heading> Welcome to Online Payment </Heading>
            <Repay> Click Here to Pay </Repay>
        </Pay>
    )
}

export default Payment;