import CardStep from "../card-step/CardStep";
import styles from "./SectionSteps.module.css";
import { SectionStepsProps } from "./types";

const SectionSteps = ({ title, description, cards }: SectionStepsProps) => {
  const getHighlightedTitle = () => {
    const words = title.split(" ");
    const lastWord = words.pop();
    return (
      <h1 className={styles.title}>
        {words.join(" ")} <span className={styles.highlight}>{lastWord}</span>
      </h1>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        {getHighlightedTitle()}
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.stepsCards}>
        {cards.map((card, index) => (
          <CardStep
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionSteps;
