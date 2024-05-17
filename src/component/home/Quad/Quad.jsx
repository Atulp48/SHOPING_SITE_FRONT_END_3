import { Box, styled } from "@mui/material"
import QuadSecond from "./QuadSecond"
import { quadData } from '../../../constants/quadProduct'

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        justifyContent: 'space-around',
    }
}))
const Quad = () => {

    return (
        <Wrapper>
            {
                quadData.map(item => (
                    <QuadSecond item={item.item} />
                ))
            }


        </Wrapper>


        // <Wrapper lg={12} md={12} sm={12} xs={12} container >

        //     {/* <QuadSub1 />

        //     <QuadSub2 />

        //     <QuadSub3 />

        //     <QuadSub4 /> */}


        // </Wrapper>

    )
}

export default Quad;