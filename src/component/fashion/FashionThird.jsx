import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";




const Url = 'https://m.media-amazon.com/images/G/31/img22/Fashion/Event/WRS22Dec/Eventpage/Unrec/WomensSBC/Women_02._SY530_QL85_.jpg';
const FashionThird = ({ image }) => {

    // console.log(image);
    return (
        <Box>
            <img src={image.url} alt="third" style={{ width: 220, padding: 10 }} />
            <Typography style={{ color: '#000', textAlign: 'center', fontSize: 20, opacity: 0.9 }}>Under ₹{image.text}</Typography>
        </Box>
    )
}



export default FashionThird;