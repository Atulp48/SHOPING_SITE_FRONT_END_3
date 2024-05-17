import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, styled, Typography, Divider } from '@mui/material';
import Countdown from 'react-countdown';

import { Link } from 'react-router-dom';


const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
    margin-top: 5px;
    background:  #ffffff;
`
const Deal = styled(Box)`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    color:#1565c0;
    font-size: 23px;
    padding: 7px;
    font-weight: 600;
    align-item: center;
`
const Image = styled('img')({
    width: 'auto',
    height: 160
})
const Text = styled(Typography)`
    line-height: 1.7;
`




const Slide = ({ products }) => {
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }

    return (
        <Component>
            <Deal>
                <Typography style={{ fontSize: 20, fontWeight: 600 }}>Deal of Day</Typography>
                <Box>
                    <Countdown
                        date={Date.now() + 5.04e+7}
                        renderer={renderer}
                    />
                </Box>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {products.map(product => (
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box style={{ textAlign: "center", padding: "35px 4px" }}>
                            <Image src={product.url} alt="product" />
                            <Text style={{ marginTop: 5, fontSize: 23, fontWeight: 600 }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: "green" }}>{product.discount}</Text>
                            <Text style={{ opacity: .8 }}>{product.tagline}</Text>
                        </Box>
                    </Link>
                )
                )}
            </Carousel>
        </Component>
    )
}

export default Slide;