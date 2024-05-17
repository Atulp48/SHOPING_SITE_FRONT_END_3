import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMobileDetails } from "../../redux/actions/likeAction";
import { Box, Grid, styled } from "@mui/material";

import LeftItem from "./LeftItem";
import RightItem from "./RightItem";

const Component = styled(Box)`
  background: #f2f2f2;
  min-height: 81.2vh;
`;

const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  background: "white",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));
const RightContainer = styled(Grid)`
  margin-top: 55px;
  padding-left: 14px;
`;

const MobileDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { mobile } = useSelector((state) => state.getMobileDetails);

  useEffect(() => {
    if (mobile && id !== mobile.id) dispatch(getMobileDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Component>
        {mobile && Object.keys(mobile).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <LeftItem mobile={mobile} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <RightItem mobile={mobile} />
            </RightContainer>
          </Container>
        )}
      </Component>
    </>
  );
};

export default MobileDetails;
