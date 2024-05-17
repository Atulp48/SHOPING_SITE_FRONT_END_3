import { Box, styled, Typography } from "@mui/material"
import FashionSecond from "./FashionSecond"




const Container = styled(Box)`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled(Box)`
    ${'' /* background: #fff; */}
`
const Heading = styled(Typography)`
color: #01d1ff;
font-size: 30px;
padding: 5px 0 0 15px;
font-weight: 600;
`

const Component = styled(Box)`
    padding-top: 25px;
    font-size: 50px;
    display: flex;
    align-item: center; 
    text-align: center;
    margin: auto;
    font-weight: 600;
    text-shadow: 3px -2px 9px #878787;

`



const FashionMain = ({ fashions }) => {
    // const [item1] = fashions;
    // console.log(item1);
    return (
        <Container>
            <Component >Offers</Component>
            {
                fashions.map(item1 => (
                    <Wrapper>
                        <Box style={{ margin: '20px 0', background: '#fff' }}>
                            <Heading >{item1.itemName}</Heading>
                            <FashionSecond item={item1.item} />
                        </Box>
                    </Wrapper>
                ))
            }
        </Container>

    )
}

export default FashionMain;