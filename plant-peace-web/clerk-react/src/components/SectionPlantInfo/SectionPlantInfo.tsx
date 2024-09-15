import styles from "./SectionPlantInfo.module.css";
// import plantImage from "../../assets/images/plant1Extended.png";
import { SectionPlantInfoProps } from "./types";

const SectionPlantInfo = ({
  name,
  subtitle,
  label,
  price,
  features,
  description,
  image,
}: SectionPlantInfoProps) => {
  return (
    <section className={styles.container}>
      <div>
        {/* <img src={plantImage} alt="Plant Image" className={styles.image} /> */}
        {typeof image === "string" ? (
          <img src={image} alt={image} className={styles.image} />
        ) : (
          image
        )}
      </div>
      <div className={styles.infoProduct}>
        <h1 className={styles.title}>
          {name}
          {/* Echinocereus Cactus */}
        </h1>
        <h2 className={styles.subtitle}>
          {subtitle}
          {/* A Majestic Addition to Your Plant Collection */}
        </h2>
        <div className={styles.labels}>
          {label}
          {/* <p>indoor</p>
          <p>cactus</p> */}
        </div>
        <p className={styles.price}>
          {price}
          {/* $139.99 */}
        </p>
        <button className={styles.button}>Check Out</button>
        <div className={styles.features}>
          {features}
          {/* <h3>Features</h3>
          <ul>
            <li>Species: Echinocereus spp.</li>
            <li>
              Mature Size: Varies by species, typically ranging from 4 to 12
              inches (10-30 cm) in height.
            </li>
            <li>
              Blooming Season: Typically spring or summer, with flowers lasting
              several days to weeks.
            </li>
            <li>
              Pot Size: Available in various pot sizes to suit your preference
              and needs.
            </li>
          </ul> */}
        </div>
        <div className={styles.description}>
          {description}
          {/* <h3>Description</h3>
          <p>
            Ladyfinger cactus (*Echinocereus pentalophus*) is also known as
            Alice, Devil's Fingers, and Dog Tail. It needs bright sunlight,
            light fertilizer, and is prone to root rot. The root system is
            shallow and weak. Aphids and mealybugs are also a danger. Avoiding
            wet soil can help with success with a ladyfinger cactus.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default SectionPlantInfo;
