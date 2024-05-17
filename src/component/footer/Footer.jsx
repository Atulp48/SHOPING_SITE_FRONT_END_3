import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-around',
    flexWrap: "wrap",
    padding: '20px 5px',
    background: '#232f3e',
    // position: 'sticky',
    bottom: 0,
    zIndex: -1,

}))

const WrapperStyle = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const Heading = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;

`

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
`

const Footer = () => {
    return (
        <Wrapper>
            <WrapperStyle>
                <Typography style={{ color: '#878787', fontWeight: 600, fontSize: 22 }}>Get to Know Us</Typography>
                <StyledBox>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>About us</Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}> Careers</Link>
                </StyledBox>
            </WrapperStyle>
            <WrapperStyle>
                <Typography style={{ color: '#878787', fontWeight: 600, fontSize: 22 }}>Contact Us</Typography>
                <StyledBox>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>Facebook</Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}> Instagram</Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}> Twitter</Link>
                </StyledBox>
            </WrapperStyle>
            <WrapperStyle>
                <Typography style={{ color: '#878787', fontWeight: 600, fontSize: 22 }}>Policy</Typography>
                <StyledBox>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>Return Policy</Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>Term of Use</Link>
                </StyledBox>
            </WrapperStyle>
            <WrapperStyle>
                <Typography style={{ color: '#878787', fontWeight: 600, fontSize: 22 }}>Help</Typography>
                <StyledBox>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>Payment</Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none', color: '#f2f2f2' }}>Shipping</Link>
                </StyledBox>
            </WrapperStyle>
        </Wrapper>
    )
}



export default Footer;