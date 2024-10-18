import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import AboutUs from "./pages/AboutUs/AboutUs";
import ErrorPage from "./pages/Error/ErrorPage";
import NotLogged from "./pages/NotLogged/NotLogged";
import SectionPlantInfo from "./components/SectionPlantInfo/SectionPlantInfo";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={
            <>
              <SignedIn>
                <Register />
              </SignedIn>
              <SignedOut>
                <Navigate to="/notlogged" />
              </SignedOut>
            </>
          }
        />

        <Route path="/plant/:id" element={<SectionPlantInfo />} />

        <Route path="/products" element={<Products />} />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/error" element={<ErrorPage />} />

        <Route
          path="/notlogged"
          element={
            <>
              <SignedIn>
                <Navigate to="/" />{" "}
              </SignedIn>
              <SignedOut>
                <NotLogged />{" "}
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
