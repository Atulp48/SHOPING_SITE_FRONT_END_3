import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, styled } from '@mui/material';
import * as React from 'react';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { breakpoints } from '@mui/system';


const StyledHeading = styled(AppBar)(({ theme }) => ({
    padding: '0 10%',
    background: 'linear-gradient(90deg, rgba(228,248,255,1) 0%, rgba(0,209,255,1) 100%)',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        padding: '0 1%'
    }
}))
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    padding: '0 250px',
    [theme.breakpoints.down('md')]: {
        padding: '0 1%'
    }
}))

const StyledMenu = styled(IconButton)(({ theme }) => ({
    display: 'none',
    margin: '0 5% 0 auto',
    color: '#ffffff',
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 200 }}>
            <List>
                <ListItem ButtonBase onClick={handleClose} >
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    )
    return (
        <StyledHeading>
            <StyledToolbar>

                <Link to={'/'}>
                    <img src="images/new_logo.png" style={{ width: "80px" }} />
                </Link>
                <Search />
                <CustomButtonWrapper><CustomButton /></CustomButtonWrapper>
                <StyledMenu onClick={handleOpen} >
                    <Menu />
                </StyledMenu>
                <Drawer open={open} onClose={handleClose} anchor={'right'}>
                    {
                        list()
                    }
                </Drawer>
            </StyledToolbar>
        </StyledHeading>
    )
}


export default Header;
