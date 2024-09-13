import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
import Form from './components/Form/Form';

function App() {

  return (
    <>
      
      <Form />
      <h1>Página Em Construção🏗️🚧</h1>
      <p>
        Obrigado por acessar, esperamos que volte quando ela estiver pronta!
      </p>
    </>

  );
}

export default App;
