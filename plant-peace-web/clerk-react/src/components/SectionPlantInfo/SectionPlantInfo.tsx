import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import defaultImg from "../../assets/images/plant1.png";
import styles from "./SectionPlantInfo.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { toast } from "react-toastify";

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

const SectionPlantInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateDiscount = (price: string, discountPercentage: number) => {
    const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const discountValue = (priceValue * discountPercentage) / 100;
    const discountedPrice = priceValue - discountValue;
    return {
      discountedPrice: discountedPrice.toFixed(2),
      originalPrice: priceValue.toFixed(2),
    };
  };

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        console.log(`Fetching plant with id: ${id}`);
        const response = await axios.get<Plant>(
          `http://3.15.153.227:3000/api/plants/${id}`
        );
        setPlant(response.data);
      } catch (error) {
        console.log("Error fetching plant:", error);
        setError("Error fetching plant");
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  if (!plant) return <div>Planta não encontrada.</div>;

  const price = parseFloat(plant.price);
  const { discountedPrice, originalPrice } =
    plant.isInSale && plant.discountPercentage > 0
      ? calculateDiscount(plant.price, plant.discountPercentage)
      : { discountedPrice: price.toFixed(2), originalPrice: "" };

  const handleButtonClick = () => {
    toast.success(`You bought ${plant.name} for $${discountedPrice}`);
    console.log(`You bought ${plant.name} for $${discountedPrice}`);
  };

  const s3BaseUrl = 'http://team4-plant-peace.s3-website.us-east-2.amazonaws.com/';
  const imgUrl = `${s3BaseUrl}${plant.imgUrl}`;

  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <img
          src={imgUrl}
          alt={plant.name}
          onError={(e) => {
            e.currentTarget.src = defaultImg;
          }}
        />
      </div>
      <div className={styles.infoProduct}>
        <h1 className={styles.title}>{plant.name}</h1>
        <h2 className={styles.subtitle}>{plant.subtitle}</h2>
        <div className={styles.labels}>
          {plant.label.split(",").map((label, index) => (
            <p key={index}>{label}</p>
          ))}
        </div>
        <p className={styles.price}>
          {plant.isInSale && plant.discountPercentage > 0 ? (
            <>
              <span className={styles.discountedPrice}>${discountedPrice}</span>
              <span className={styles.originalPrice}>${originalPrice}</span>
            </>
          ) : (
            <>${price.toFixed(2)}</>
          )}
        </p>
        <CustomButton
          text="Check out"
          to="/products"
          onClick={handleButtonClick}
        />
        <div className={styles.features}>
          <h3>Features</h3>
          <ul>
            {plant.features.split(". ").map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.description}>
          <h3>Description</h3>
          <p>{plant.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionPlantInfo;
