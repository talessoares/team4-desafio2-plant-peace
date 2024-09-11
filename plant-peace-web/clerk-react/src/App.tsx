import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "./App.css";
import { ThisWeek } from "./components/ThisWeek/ThisWeek";
import Sale from "./components/Sale/Sale.tsx";

function App() {
  return (
  <>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <Sale />
    <h1>
    Página Em Construção🏗️🚧
    </h1>
    <p>Obrigado por acessar, esperamos que volte quando ela estiver pronta!</p>
  </>

  );
}

export default App;
