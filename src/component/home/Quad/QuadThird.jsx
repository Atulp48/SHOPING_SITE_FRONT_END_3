import { Box, styled, Typography } from "@mui/material"
import { addEllipsis2 } from "../../../utils/common-utils";
const Wrapper = styled(Box)`
   padding: 4px;
`

const QuadSubSub = ({ item1 }) => {
    const URL = 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg';

    return (
        <>
            <Wrapper>
                <img src={item1.url} alt="product" style={{ width: 145, height: 110 }} />
                <Typography style={{ textAlign: 'center' }}>{addEllipsis2(item1.text)}</Typography>
            </Wrapper>
        </>
    )
}

export default QuadSubSub;