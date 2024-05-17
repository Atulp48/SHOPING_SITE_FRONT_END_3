import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { getFashion } from '../../redux/actions/productFashionActions';
import { useDispatch, useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slider from "./Slider";
import TopOffer from './TopOffer';
import Quad from './Quad/Quad';
import FashionMain from '../fashion/FashionMain';
import { getLikes } from '../../redux/actions/likeAction';
const Conponent = styled(Box)`
    padding: 10px;
    background: #dbf6ff;

`
const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    const { fashion } = useSelector(state => state.getFashion);
    // const { like } = useSelector(state => state.getLikes)
    // console.log(like);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getFashion());
        // dispatch(getLikes());

    }, [dispatch])     // [] component dead mount condition


    // [] component dead mount condition
    return (
        <>
            <Navbar />
            <Conponent>
                <Banner />
                <Slider products={products} />
                <FashionMain fashions={fashion} />
                <TopOffer />
                <Quad />
                <Slider products={products} />
            </Conponent>
        </>
    )
}

export default Home;