import { Typography, Menu, MenuItem, Box, styled } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";

const LogineName = styled(Box)`
    display: flex;
    cursor: pointer;
    margin-top: 0px;
    margin-left: 15px;

`
const MenuDesign = styled(Menu)`
    margin-right: 3px;
    ${'' /* margin-top: 3px; */}
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);
    const [init, final] = useState(true);
    const cartSetZero = () => {
        final(false);
    }


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const logoutUser = () => {
        setAccount('');
    }
    return (
        <>
            <LogineName onClick={handleClick}><Typography>{account} </Typography><KeyboardArrowDownIcon /> </LogineName>
            <MenuDesign
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}

            >
                <MenuItem onClick={() => { handleClose(); logoutUser(); cartSetZero(); }}><LogoutIcon color="primary" fontSize="small" />     LogOut</MenuItem>
            </MenuDesign>
        </>
    )
}

export default Profile;