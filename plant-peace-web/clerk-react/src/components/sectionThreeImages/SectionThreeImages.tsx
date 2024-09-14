import React from "react";
import styles from "./SectionThreeImages.module.css";
import image1 from "../../assets/images/rectangle1.png";
import image2 from "../../assets/images/rectangle2.png";
import image3 from "../../assets/images/rectangle3.png";
import CustomButton from "../CustomButton/CustomButton";

const SectionThreeImages: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper1}>
        <img src={image1} alt="Plants Image 1" className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <img src={image2} alt="Plants Image 2" className={styles.image} />
      </div>

      <div className={styles.textSection}>
        <div className={styles.imageWrapper}>
          <img
            src={image3}
            alt="Plants Image 3"
            className={styles.imageUpperText}
          />
        </div>
        <p>
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. But we don’t stop there! We believe that knowledge is the key
          to a thriving garden, so we offer a wealth of information and
          resources on gardening techniques, plant care tips, and landscaping
          ideas. Whether you’re a seasoned gardener or just starting your green
          journey, our goal is to inspire and support you every step of the way.
          Ready to explore our virtual garden and discover the joys of gardening
          with us!
        </p>

        <div className={styles.customButton}>
          <CustomButton text="See More Photos" to="#" />
        </div>
      </div>
    </div>
  );
};

export default SectionThreeImages;
