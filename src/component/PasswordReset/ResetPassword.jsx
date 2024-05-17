import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";
import Alert from '@mui/material/Alert';

const StyledBox = styled(Box)`
    display: flex;
    min-height: 81vh;
    justify-content: center;
    align-items: center;
`

const ResetPassword = () => {
    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState("");
    const setValue = (e) => {
        setEmail(e.target.value);
    }
    const sendLink = async (email) => {
        // email.preventDefault();


        const res = await fetch("/sendpasswordlink", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await res.json();

        if (data.status === 201) {
            setEmail("");
            setMessage(true)
        }
    }



    console.log(email);



    return (
        <StyledBox>
            <Box>
                <Typography>Reset Your Password</Typography>
                {message && <Alert severity="error">Password Reset link sent to your email.</Alert>}

                <TextField variant="standard" onChange={(e) => setValue(e)} name='email' label="Enter Email" />
                <Button onClick={sendLink}>Send</Button>
            </Box>
        </StyledBox>
    )
}

export default ResetPassword;