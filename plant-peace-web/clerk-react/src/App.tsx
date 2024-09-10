import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import './App.css';
import Footer from './components/Footer/Footer';



function App() {
  return (
   
      <Footer />
  
  );
}

export default App;
