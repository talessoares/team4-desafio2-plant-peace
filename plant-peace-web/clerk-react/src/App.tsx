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

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </>

  );
}

export default App;
