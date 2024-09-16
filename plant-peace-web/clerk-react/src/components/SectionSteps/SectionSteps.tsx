import CardStep from "../card-step/CardStep";
import styles from "./SectionSteps.module.css";
import { SectionStepsProps } from "./types";

const SectionSteps = ({ title, description, cards }: SectionStepsProps) => {
  const getHighlightedTitle = (title: string | undefined) => {
    if (!title) return null;

    const words = title.trim().split(" ");
    const lastWord = words.length > 1 ? words.slice(-1) : words;
    const initialWords = words.slice(0, -1).join(" ");

    return (
      <h1 className={styles.title}>
        <div>
          {initialWords} <span className={styles.highlight}>{lastWord}</span>
        </div>
      </h1>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        {getHighlightedTitle(title)}
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
