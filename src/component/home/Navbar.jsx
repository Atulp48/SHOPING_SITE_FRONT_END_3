import React from "react";
import { Box, styled, Typography } from '@mui/material';
import { navData } from '../../constants/data';
// import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import FashionMain from "../fashion/FashionMain";

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '75px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '75px 0px 0 0px',
    }
}))
const Container = styled(Box)`
    padding : 12px 8px;
    text-align: center;
    cursor: pointer;
`
const Text = styled(Typography)`
    font-weight: 600;
    font-size: 14px;
    margin-top: -10px;
`


const Navbar = () => {
    const navigate = useNavigate();
    const FashionData = (text) => {
        switch (text) {
            case 'Fashion':
                navigate("/fashion")
                break;

            case 'Mobile':
                navigate('/mobile')
                break;
            default:
                navigate("/")
        }
    }
    return (
        <Box style={{ background: '#ffff' }}>
            <Component>
                {
                    navData.map(data => (
                        <Container onClick={() => FashionData(data.text)}>
                            <img src={data.url} alt="nav" style={{ width: 64 }} />
                            <Text>{data.text}</Text>

                        </Container>

                    ))
                }
            </Component>
        </Box>

    )
}

export default Navbar;