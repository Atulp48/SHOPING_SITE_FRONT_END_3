
import { Box, Grid, styled, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const StyledBox2 = styled(Box)`
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
    justify-content: center;
    padding-top: 25px;

`
const ImageStyle = styled('img')({
    display: 'flex',
    margin: 'auto',
    background: '#fff',
    width: 120,
})

const StyledBox = styled(Box)`
display: flex;
flex-direction: column;
margin-top: 15px;

`
const ImgBox = styled(Box)`
display: flex;
text-align: center;
width: 50%;
height: 100%;
marginTop: 15px;

`
const StyledGrid = styled(Grid)(({ theme }) => ({


    [theme.breakpoints.down('md')]: {
        padding: '10px 20px',
    }
}))



// const url = 'https://rukminim1.flixcart.com  /image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70';

const MobileSecond = ({ item }) => {

    return (
        <Link to={`mobile/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Grid container style={{ padding: '10px 0', background: '#ffff', borderTop: '1px solid #878787' }}    >
                <Grid item lg={4} md={4} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <ImgBox> <ImageStyle src={item.url} alt="mobile" /></ImgBox>
                </Grid>
                <StyledGrid item lg={8} md={8} sm={12} xs={12}>
                    <StyledBox2 >
                        <Typography style={{ fontSize: 25, fontWeight: 600, color: '#1565c0' }}>{item.title}</Typography>
                        <Typography style={{ marginTop: 3, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                        </Typography>
                        <Typography>
                            <Box component="span" style={{ fontSize: 28, color: '#1565c0' }}>₹{item.price.mrp}</Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.cost}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component="span" style={{ color: "#878787" }}>{item.price.discount}</Box>
                        </Typography>
                        <StyledBox>
                            <Typography component="span" style={{ color: "#878787" }}>{item.description.des1}</Typography>
                            <Typography component="span" style={{ color: "#878787" }}>{item.description.des2}</Typography>
                            <Typography component="span" style={{ color: "#878787" }}>{item.description.des3}</Typography>
                            <Typography component="span" style={{ color: "#878787" }}>{item.description.des4}</Typography>
                        </StyledBox>


                    </StyledBox2>
                </StyledGrid>
            </Grid >
        </Link>
    )
}


export default MobileSecond;