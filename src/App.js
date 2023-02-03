import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import ContactPage from "./components/ContactPage/ContactPage";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import styled from "styled-components";
import Home from "./components/pages/Home/Home";
import PC from "./components/pages/PC/PC";
import PS5 from "./components/pages/PS5/PS5";
import Booking from "./components/pages/Booking-Page/Booking";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  height: 100vh;
  background-color: rgb(36, 38, 49);
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Notfoundpage />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/ps5" element={<PS5 />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
