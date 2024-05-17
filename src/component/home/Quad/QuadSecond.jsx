import { Box, styled } from "@mui/material";
import QuadThird from './QuadThird';

const StyledBox = styled(Box)(({ theme }) => ({

    display: 'flex',
    flexWrap: 'wrap',
    width: 350,
    height: 350,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
        marginTop: 5,
        justifyContent: 'space-around',
    },
    [theme.breakpoints.down('md')]: {
        marginTop: 5,
    }
}))




const QuadSecond = ({ item }) => {
    return (
        <StyledBox>
            {
                item.map(item1 => (
                    <QuadThird item1={item1} />
                ))
            }

        </StyledBox>
    )
}


export default QuadSecond;