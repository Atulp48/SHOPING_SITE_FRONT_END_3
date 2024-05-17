
import { Box, Grid, Typography, styled, Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import Countdown from 'react-countdown';


const URLMac = 'https://opencart.templatemela.com/OPC10/OPC100247/OPC1/image/catalog/Cms-1.png';
const URLBank = 'https://zeevector.com/wp-content/uploads/LOGO/Axis-Bank-Logo-Vector-PNG.png';
const URLCam = 'https://rukminim1.flixcart.com/image/416/416/k3g73bk0/home-security-camera/a/z/w/4chdvr-4b-03-cp-plus-original-imafmkjfqtcty5tj.jpeg?q=70';

const Conponent = styled(Grid)(({ theme }) => ({
    display: 'flex',
    width: 440,
    height: 400,
    flexDirection: 'column',
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 0',
    [theme.breakpoints.down('lg')]: {
        // objectFit: 'cover',
        width: '100%'
    }
}))
const AllContainers = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0;
`

const TopOffer = () => {

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }
    return (
        <AllContainers lg={12} md={12} sm={12} xs={12} container>
            <Conponent item lg={4} md={4} sm={12} xs={12}>
                <img src={URLMac} alt="macbook" />
                <Box style={{ display: "flex", textAlign: "center" }}>
                    <AppleIcon style={{ fontSize: 50 }}></AppleIcon>
                    <Typography style={{ fontSize: 37 }}>MacBooks</Typography>
                </Box>
                <Typography style={{ fontSize: 17, opacity: .7 }}>Starting At Only ₹ 80,500</Typography>
                <Box style={{ display: "flex" }}>
                    <img src={URLBank} alt="bank img" style={{ width: 75 }} />
                    <Typography style={{ paddingLeft: 8 }}>10% Instant Discount*</Typography>
                </Box>
            </Conponent>




            <Conponent item lg={4} md={4} sm={12}>
                <Typography style={{ fontSize: 37 }}> <Typography style={{ color: "#1565c0", fontSize: 37, display: "inline", marginRight: 10, fontWeight: 600 }}>Offers</Typography>of </Typography>
                <Typography style={{ fontSize: 37 }}>the day</Typography>
                <Typography style={{ fontSize: 20, opacity: .9, color: "green" }}>Hurry up!!</Typography>
                <Box style={{ fontSize: 32, marginTop: 12 }}>
                    <Countdown
                        date={Date.now() + 5.04e+7}
                        renderer={renderer}
                    />
                </Box>

                <Button variant='contained' style={{ borderRadius: 5, marginTop: 25 }}>Shop Now</Button>
                <Typography style={{ marginTop: 12, fontSize: 25 }}>Get Deals Everyday.</Typography>
            </Conponent>



            <Conponent item lg={4} md={4} sm={12}>
                <img src={URLCam} alt="camera" style={{ height: 174 }} />
                <Box style={{ display: "flex", textAlign: "center", marginTop: 7 }}>
                    {/* <AppleIcon style={{ fontSize: 50 }}></AppleIcon> */}
                    <Typography style={{ fontSize: 37 }}>Home Security</Typography>
                </Box>
                <Typography style={{ fontSize: 17, opacity: .7 }}>Up To Flat 50% Off</Typography>
                <Box style={{ display: "flex" }}>
                    <img src={URLBank} alt="bank img" style={{ width: 75 }} />
                    <Typography style={{ paddingLeft: 8 }}>10% Instant Discount*</Typography>
                </Box>
            </Conponent>
        </AllContainers>
    )
}

export default TopOffer;