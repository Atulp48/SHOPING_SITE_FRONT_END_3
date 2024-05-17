import { Dialog, Box, Typography, Button, styled } from '@mui/material'
import TextField from '@mui/material/TextField';


import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Alert from '@mui/material/Alert';

import { authenticateSingup, authenticateLogin } from '../../service/api.js';

import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
const Component = styled(Box)`
    display: flex;
    height: 75vh;
    width: 88vh;

`
const LeftSide = styled(Box)`
   width: 30px;
   heigh: 30px
`
const ImageBox = styled(Box)`
    background :#a6eeff url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    ${'' /* height: 100%; */}
    width: 30%;
    padding: 45px 35px;
    color: #004e69;
    font-size: 30px;
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div,& > p, & > button{
        margin-top: 10px;
    }
    text-align: center;
`


const LoginButton = styled(Button)`
    background: linear-gradient(90deg,rgba(0,209,255,1) 0%,  rgba(228,248,255,1) 50%, rgba(0,209,255,1));
    width: 60%;
    font-size:22px;
    margin-left: 2;
`

const Text = styled(Typography)`
    color: #03697f;
    margin-top: 17px
`
const NewUSerBox = styled(Box)`
    
    display: flex;
    margin: 0;
    alignItem: left;
    padding-left: 40%;
    
`
const LoginForget = styled(Box)`
    display: flex;
    padding-top: 30px;
`

const GoogleFacebook = styled(Box)`
    display: flex;
    margin-top: 30px;
    text-align: center;
    align-item: center;
`
const LinkDesign = styled(Typography)`
    display: flex;
    textDecoration: none;
    color: #0c3b69;
    fontWeight: 600;
    MarginRight: 13px;
    cursor: pointer;
`
const WelcomBack = {
    "marginTop": 15,
    "fontSize": "28px",
    "fontWeight": 600,
    color: "#0c3b69"
}

const StyledIcon = {
    "width": 35,
    height: 35,
    marginLeft: 10,
    paddingTop: 6,
    color: "#0c3b69"
}


const accountInitialValue = {
    login: {
        view: 'login',
        heading: "Login",
        inputType: "Login with"
    },
    singup: {
        view: 'singup',
        heading: "Looks like you're new here",
        inputType: "Sign up with"
    }
}

const singUpData = {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: ''
}
const loginData = {
    password: '',
    username: ''
}
const LoginDialog = ({ open, setOpen }) => {



    const [data, setData] = useState(singUpData);
    const [login, setLogin] = useState(loginData);
    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [erroPopup, setErrorPopup] = useState(false);

    const { setAccount } = useContext(DataContext);

    const inputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setErrorPopup(false);
    }
    const toggleSingup = () => {
        toggleAccount(accountInitialValue.singup);
    }
    const toggleLogin = () => {
        toggleAccount(accountInitialValue.login);
    }

    const singupUser = async () => {
        let response = await authenticateSingup(data);
        // console.log(response);
        if (!response) return;
        handleClose();
        setAccount(data.name);
    }
    const valueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        // console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.name);
        }
        else {
            setErrorPopup(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}>
            <Component>
                <ImageBox>
                    <LeftSide>
                        <img src="images/new_logo.png" alt="images/logo512.png" style={{ width: 60 }} />
                    </LeftSide>
                    <Typography variant='hs'>{account.heading}</Typography>
                    <Typography style={{ marginTop: 20 }}>Get access to your orders, wishlist and Recommendation</Typography>
                </ImageBox>
                {
                    account.view === 'login' ?
                        <Wrapper>
                            <NewUSerBox style={{ margin: 0 }}>
                                <LinkDesign href="#" color="inherit">New User?<Typography style={{ paddingLeft: 4, color: "#0196ca" }} onClick={() => toggleSingup()}>Sign Up</Typography></LinkDesign>
                            </NewUSerBox>
                            <Typography style={WelcomBack}>Welcome Back</Typography>

                            {erroPopup && <Alert severity="error">Please enter valid username or password</Alert>}


                            <TextField variant="standard" onChange={(e) => valueChange(e)} name='username' label="Enter email/mobile" />
                            <TextField variant="standard" onChange={(e) => valueChange(e)} name='password' label="Enter Password" />
                            <LoginForget>
                                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                <Link to={'/password-reset'} onClick={() => handleClose()} style={{ textDecoration: 'none', color: 'inherit' }}><Button style={{ marginLeft: 3, color: "#000", fontWeight: 500 }}>Forget Password ?</Button></Link>
                            </LoginForget>
                            <GoogleFacebook>
                                <Text style={{ fontWeight: 600, fontSize: 15, opacity: 0.8 }}>{account.inputType}</Text>
                                <GoogleIcon style={StyledIcon} />
                                <FacebookIcon style={StyledIcon} />
                            </GoogleFacebook>
                        </Wrapper>
                        :
                        <Wrapper>
                            <NewUSerBox>
                                <LinkDesign color="inherit" onClick={() => toggleLogin()}>Already Register?<Typography style={{ paddingLeft: 4, color: "#0196ca" }}>Sign In</Typography></LinkDesign >
                            </NewUSerBox>
                            <Typography style={WelcomBack}>Welcome In Trend Wish</Typography>
                            <TextField variant="standard" onChange={(e) => inputChange(e)} name='name' label="Enter Name" />

                            <TextField variant="standard" onChange={(e) => inputChange(e)} name='username' label="Enter Username" />
                            <TextField variant="standard" onChange={(e) => inputChange(e)} name='email' label="Enter Email" />
                            <TextField variant="standard" onChange={(e) => inputChange(e)} name='phone' label="Enter Phone" />
                            <TextField variant="standard" onChange={(e) => inputChange(e)} name='password' label="Enter Password" />

                            <LoginButton onClick={() => singupUser()}>Continue</LoginButton>

                            <GoogleFacebook>
                                <Text style={{ fontWeight: 600, fontSize: 15, opacity: 0.8 }}>{account.inputType}</Text>
                                <GoogleIcon style={StyledIcon} />
                                <FacebookIcon style={StyledIcon} />
                            </GoogleFacebook>
                        </Wrapper>
                }

            </Component>
        </Dialog >
    )
}

export default LoginDialog;