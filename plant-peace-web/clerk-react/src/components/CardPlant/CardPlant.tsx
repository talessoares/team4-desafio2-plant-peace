import styles from "./CardPlant.module.css";
import defaultImg from "../../assets/images/plant1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// setimage

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
  // Função para calcular o desconto
  const calculateDiscount = (price: string, discountPercentage: number) => {
    const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, "")); // Remove qualquer símbolo de moeda
    const discountValue = (priceValue * discountPercentage) / 100;
    const discountedPrice = priceValue - discountValue;
    console.log(plant.price)
    return {
      discountedPrice:discountedPrice.toFixed(2),
      
      originalPrice: priceValue.toFixed(2), // Preço original formatado
    };
  };

  if (!plant) {
    return <div>Carregando...</div>;
  }

  const { discountedPrice, originalPrice } = plant.isInSale && plant.discountPercentage > 0
    ? calculateDiscount(plant.price, plant.discountPercentage)
    : { discountedPrice: plant.price, originalPrice: "" };

  return (
    <Link to={`/plant/${plant.id}`} className={styles.card}> {/* Link para a página de detalhes da planta */}
    <img
      src={`http://localhost:8080/images/${plant.imgUrl}`}
      alt={plant.name}
      onError={(e) => {
        e.currentTarget.src = defaultImg; // Imagem padrão se houver erro
      }}
    />
    <h1>{plant.name}</h1>
    <p>
      <span className={styles.price}>R${discountedPrice}</span>
      {plant.isInSale && plant.discountPercentage > 0 && originalPrice && (
        <span className={styles.originalPrice}>R${originalPrice}</span>
      )}
    </p>
    <div>
      <span className={styles.label}>
        {plant.label}
      </span>
    </div>
  </Link>
  );
};

export default CardPlant;
