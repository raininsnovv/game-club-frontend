import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactPage from "./components/ContactPage/ContactPage";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/Main/MainPage";
import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  height: 100vh;
  background-color: rgb(36, 38, 49);
  color: white;
  text-align: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
