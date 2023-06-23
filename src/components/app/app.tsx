import { Route, Router, Routes } from "react-router-dom";
import HeaderHelpLinks from "../header/header-help-links/header-help-links";
import HeaderInformation from "../header/header-information/header-information";
import HeaderMenu from "../header/header-menu/header-menu";
import HomePage from "../home-page/home-page";
import PhotoBooks from "../photo-books/photo-books";

const App = () => {
  return (
    <>
      <HeaderInformation />
      <HeaderHelpLinks />
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photobooks" element={<PhotoBooks />} />
      </Routes>
    </>
  );
};

export default App;
