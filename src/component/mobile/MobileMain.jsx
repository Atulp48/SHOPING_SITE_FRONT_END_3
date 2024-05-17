
import { Box } from "@mui/material";

import MobileSecond from "./MobileSecond";
import MobileBanner from "./MobileBanner";



const MobileMain = ({ mobile }) => {
    // console.log(mobile);
    return (

        <Box style={{ padding: '0 10px' }}>
            <MobileBanner />
            {
                mobile.map(item => (

                    <MobileSecond item={item} />
                ))
            }
        </Box>
    )
}


export default MobileMain;