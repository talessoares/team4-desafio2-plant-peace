import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
import Home from './pages/Home/Home';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/form" element={<Register />} />
    </Routes>
    <Footer />
    </>

  );
}

export default App;
