import { InputBase, Box, List, ListItem, Link, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'



const SearchContainer = styled(Box)`
    background: #fff;
    width: 40%;
    borde-radius: 2px;
    margin-left: 23px;
    display: flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left: 12px;
    width: 100%;
`;

const searchicon = {
    display: "flex",
    alignItems: "center"
}

const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: #000;
    margin-Top: 40px;
    width: 450px;
`

const Search = () => {
    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
        setText(text);

    }
    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for product, brand and more'
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <Box style={searchicon}>
                <SearchIcon
                    style={{ color: "rgba(0,209,255,1)" }}
                />
            </Box>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <a href={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: "inherit " }}>
                                    {/* onClick={() => setText('')} */}
                                    {product.title.longTitle}

                                </a>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;