import styled from "styled-components";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <Timer />
    </StyledContainer>
  );
};

export default Layout;
