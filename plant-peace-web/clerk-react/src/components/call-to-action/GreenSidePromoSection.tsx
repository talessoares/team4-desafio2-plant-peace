import styles from "./styles.module.css";
import mainPlant from "../../assets/images/mainPlant.svg";
import leftPlant from "../../assets/images/leftPlant.svg";

const GreenSidePromoSection = () => {
  return (
    <>
      <div className={styles["main-container"]}>
        <section className={styles.description}>
          <div className={styles["description-container"]}>
            <div className={styles["nature-span"]}>
              <div className={styles.line}></div>
              <h3 id={styles["love-nature"]}>Love for Nature</h3>
            </div>

            <h1>
              discover your <span>green</span> side
            </h1>
            <p className={styles.paragraphDescription}>
              We are your one-stop destination for all things green and growing.
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis.
            </p>
            <a id={styles["shop-now"]} href="#">
              shop now
            </a>
          </div>

          <div className={styles["left-plant-container"]}>
            <picture>
              <img
                className={styles["left-plant"]}
                src={leftPlant}
                alt="Green Plant"
              />
            </picture>
          </div>

          <a href="#" id={styles["learn-gardening"]}>
            Learn Gardening &#8594;
          </a>
        </section>

        <picture>
          <img
            className={styles["main-plant"]}
            src={mainPlant}
            alt="Green Plant"
          />
        </picture>
      </div>
    </>
  );
};

export default GreenSidePromoSection;
