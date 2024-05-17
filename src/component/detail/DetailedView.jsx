
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions.js'
import { Box, Grid, styled } from '@mui/material';
import ActionItem from "./ActionItem.jsx";
import ProductDetails from "./ProductDetail.jsx";


const Component = styled(Box)`
background: #f2f2f2;
min-height: 81.2vh;

`


const Container = styled(Grid)(({ theme }) => ({
    display: 'flex',
    background: 'white',
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'center'
    }
}))
const RightContainer = styled(Grid)`
    margin-top: 55px;
    padding-left: 14px;
`
const DetailedView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id != product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id])

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container >
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetails product={product} />
                    </RightContainer>

                </Container>
            }

        </Component>
    )
}

export default DetailedView;