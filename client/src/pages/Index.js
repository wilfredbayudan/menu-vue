import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainContent = styled.main`
  flex: 1 0 auto;
  margin: 50px auto 0 auto;
  width: 100%;
  max-width: 1366px;
  padding: 20px;
`;

const Index = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Index;
