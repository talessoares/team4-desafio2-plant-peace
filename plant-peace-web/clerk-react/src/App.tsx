// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";

import "./App.css";

import GreenSidePromoSection from "./components/call-to-action/GreenSidePromoSection";

function App() {
  return (
    <header>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      <GreenSidePromoSection />
    </header>
  );
}

export default App;
