import React from 'react';
import GreenSidePromoSection from '../../components/call-to-action/GreenSidePromoSection';
import { Header } from '../../components/Header/Header';
import SectionSteps from '../../components/SectionSteps/SectionSteps';
import SectionThreeImages from '../../components/sectionThreeImages/SectionThreeImages';
import { ThisWeek } from '../../components/ThisWeek/ThisWeek';
import Sale from '../../components/Sale/Sale';
import styles from './Home.module.css';
import water from '../../assets/icons/water.png';
import plant from '../../assets/icons/nutrients.png';
import sun from '../../assets/icons/sun.png';

const Home = () => {
  
  const title = "steps to take care of plants your";
  const description = "By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants..";
  const cards = [
    {
      icon: water, 
      title: "Watering",
      description: "water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.",
    },
    {
      icon: sun,
      title: "Sunlight",
      description: "Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs",
    },
    {
      icon: plant,
      title: "Nutrients and Fertilizing",
      description: "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.",
    },
  ];

  return (
    <div className={styles.container}>
      <GreenSidePromoSection />
      <SectionSteps cards={cards} title={title} description={description} />
      <div>

      </div>
     
      <ThisWeek />
      <Sale />

    </div>
  );
};

export default Home;
