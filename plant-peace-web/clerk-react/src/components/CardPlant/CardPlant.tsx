import styles from "./CardPlant.module.css";

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
  label: string[];
}

// Função para calcular o desconto
const calculateDiscount = (price: string, discountPercentage: number) => {
  const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, "")); // Remove qualquer símbolo de moeda
  const discountValue = (priceValue * discountPercentage) / 100;
  const discountedPrice = priceValue - discountValue;

  return {
    discountedPrice: discountedPrice.toFixed(2), // Valor com desconto formatado
    originalPrice: priceValue.toFixed(2) // Preço original formatado
  };
};

// Verifica se a planta está em promoção
const isPlantInSale = (plant: Plant) => {
  return plant.isInSale && plant.discountPercentage > 0;
};

const CardPlant = ({ plant }: { plant: Plant }) => {
  if (!plant) {
    return <div>Carregando...</div>;
  }

  const { discountedPrice, originalPrice } = isPlantInSale(plant)
    ? calculateDiscount(plant.price, plant.discountPercentage)
    : { discountedPrice: plant.price, originalPrice: "" };

  return (
    <div className={styles.card}>
      <img src={plant.imgUrl} alt={plant.name} />
      <h1>{plant.name}</h1>

      {isPlantInSale(plant) ? (
        <>
          <p>
           
            <span className={styles.discountedPrice}>R${discountedPrice}</span>
            <span className={styles.originalPrice}>R${originalPrice}</span>
          </p>
        </>
      ) : (
        <p>R${plant.price}</p>
      )}
      
      <div>
        {plant.label.map((lbl, index) => (
          <span key={index} className={styles.label}>
            {lbl}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardPlant;
