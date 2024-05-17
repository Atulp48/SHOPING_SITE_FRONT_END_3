import { Box, styled } from "@mui/material"
import FashionThird from "./FashionThird"


const BoxWrapper = styled(Box)`
   display: flex;
   margin: 12px 0;
   justify-content: space-around;
    flex-wrap: wrap;
    padding: 5px 0;
    border-top: 2px solid #f2f2f2;
`



const FashionSecond = ({ item }) => {

    const second = item;
    // console.log(second);
    // const newSecond = { second };

    return (
        <BoxWrapper>
            {
                second.map(image => (
                    <FashionThird image={image} />
                )
                )

            }
        </BoxWrapper>
    )
}

export default FashionSecond;