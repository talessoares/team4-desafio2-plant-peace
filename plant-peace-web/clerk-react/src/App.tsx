import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";
// import SectionSteps from "./components/SectionSteps/SectionSteps";
// import water from "./assets/icons/water.png";
// import sun from "./assets/icons/sun.png";
// import nutrients from "./assets/icons/nutrients.png";
import { ThisWeek } from "./components/ThisWeek/ThisWeek";
import Sale from "./components/Sale/Sale.tsx";
import GreenSidePromoSection from "./components/call-to-action/GreenSidePromoSection";


function App() {
  // const cards = [
  //   {
  //     icon: water,
  //     title: "Watering",
  //     description: `water your plants when the top inch of soil feels dry to the touch.
  //       Avoid overwatering, as it can lead to root dehydration.`,
  //   },
  //   {
  //     icon: sun,
  //     title: "Sunlight",
  //     description: `Most plants need adequate sunlight to thrive. Place your plants in
  //           areas that receive the appropriate amount of light for their
  //           specific needs`,
  //   },
  //   {
  //     icon: nutrients,
  //     title: "Nutrients and Fertilizing",
  //     description: `Choose a suitable fertilizer based on the specific needs of your
  //           plants, whether it's a balanced or specialized formula.`,
  //   },
  // ];
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
      {/* <SectionSteps
        title="Steps To Take Care Of Your Plants"
        description="By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants."
        cards={cards}
      /> */}
      <h1>Página Em Construção🏗️🚧</h1>
      <p>
        Obrigado por acessar, esperamos que volte quando ela estiver pronta!
      </p>
    </>

  );
}

export default App;
