import styles from "./CardPlant.module.css";
import defaultImg from "../../assets/images/default-img.jpeg";
import { Link } from "react-router-dom";

interface Plant {
  _id: string;
  id: number;
  name: string;
  subtitle: string;
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
  label: string;
}

const CardPlant = ({ plant }: { plant: Plant }) => {
  const calculateDiscount = (price: string, discountPercentage: number) => {
    const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const discountValue = (priceValue * discountPercentage) / 100;
    const discountedPrice = priceValue - discountValue;
    return {
      discountedPrice: discountedPrice.toFixed(2),
      originalPrice: priceValue.toFixed(2),
    };
  };

  if (!plant) {
    return <div>Carregando...</div>;
  }

  const { discountedPrice, originalPrice } =
    plant.isInSale && plant.discountPercentage > 0
      ? calculateDiscount(plant.price, plant.discountPercentage)
      : { discountedPrice: plant.price, originalPrice: "" };

  // URL do S3 
  const s3BaseUrl = 'http://plantsdweb.s3-website-us-east-1.amazonaws.com/';
  const imgUrl = `${s3BaseUrl}${plant.imgUrl}`;

  return (
    <Link to={`/plant/${plant.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imgUrl}
          alt={plant.name}
          onError={(e) => {
            e.currentTarget.src = defaultImg;
          }}
        />
      </div>

      <h1>{plant.name}</h1>
      <p>
        <span className={styles.price}>${discountedPrice}</span>
        {plant.isInSale && plant.discountPercentage > 0 && originalPrice && (
          <span className={styles.originalPrice}>${originalPrice}</span>
        )}
      </p>
      <div>
        <span className={styles.label}>{plant.label}</span>
      </div>
    </Link>
  );
};

export default CardPlant;