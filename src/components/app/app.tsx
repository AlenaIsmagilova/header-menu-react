import { Navigate, Route, Routes } from "react-router-dom";
import Cards from "../cards/cards";
import Certificate from "../certificate/certificate";
import GiftsToFriends from "../gifts-to-friends/gifts-to-friends";
import GiftsToJustMerried from "../gifts-to-just-merried/gifts-to-just-merried";
import Gifts from "../gifts/gifts";
import HeaderHelpLinks from "../header/header-help-links/header-help-links";
import HeaderInformation from "../header/header-information/header-information";
import HeaderMenu from "../header/header-menu/header-menu";
import NotebookReadyMade from "../notebook-ready-made/notebook-ready-made";
import Notebook from "../notebook/notebook";
import PhotoBooks from "../photo-books/photo-books";
import TraditionBook from "../tradition-book/tradition-book";
import Wedding from "../wedding/wedding";

const App = () => {
  return (
    <>
      <HeaderInformation />
      <HeaderHelpLinks />
      <HeaderMenu />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="products/photobooks" replace />}
        />
        <Route path="products/photobooks" element={<PhotoBooks />} />
        <Route path="products/cards" element={<Cards />} />
        <Route path="products/certificate" element={<Certificate />} />
        <Route path="products/gifts" element={<Gifts />} />
        <Route path="products/tradition-book" element={<TraditionBook />} />
        <Route path="products/notebook/with-photo" element={<Notebook />} />
        <Route
          path="products/notebook/ready-made"
          element={<NotebookReadyMade />}
        />
        <Route path="products/to-friends" element={<GiftsToFriends />} />
        <Route
          path="products/to-just-merried"
          element={<GiftsToJustMerried />}
        />
        <Route path="products/wedding" element={<Wedding />} />
      </Routes>
    </>
  );
};

export default App;
