
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './banner.css';

import { Box, styled, Typography } from '@mui/material';
import { bannerData } from '../../constants/data';

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 473,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 300
    },
    [theme  .breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: 180
    }
}))

const Banner = () => {
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Box style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <Typography style={{ fontSize: 12, fontWeight: 600, padding: " 2px 0px 17px 4px" }}><Typography style={{ color: "green", display: "inline", fontSize: 18, fontWeight: 700 }}>Need It Today? </Typography>Free In Store & Pickup / Same Day Delivery</Typography>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                // customTransition="all 1"
                // transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    bannerData.map(data => (
                        <Image src={data.url} alt="banner" />

                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Banner;