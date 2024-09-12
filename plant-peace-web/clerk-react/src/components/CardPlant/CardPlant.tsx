import styles from "./CardPlant.module.css";
import defaultImg from "../../assets/images/plant1.png";

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
    originalPrice: priceValue.toFixed(2), // Preço original formatado
  };
};

const CardPlant = ({ plant }: { plant: Plant }) => {
  if (!plant) {
    return <div>Carregando...</div>;
  }

  const { discountedPrice, originalPrice } = plant.isInSale && plant.discountPercentage > 0
    ? calculateDiscount(plant.price, plant.discountPercentage)
    : { discountedPrice: plant.price, originalPrice: "" };

  return (
    <div className={styles.card}>
      <img
        src={plant.imgUrl || defaultImg} // Use a imagem padrão se plant.imgUrl estiver ausente
        alt={plant.name}
        onError={(e) => {
          e.currentTarget.src = defaultImg; // Substitui pela imagem padrão se houver erro no carregamento
        }}
      />
      <h1>{plant.name}</h1>
      <p>
       
           <span className={styles.price}>R{plant.price}</span>
           {plant.isInSale && plant.discountPercentage > 0 && originalPrice && (
          
          <>
           <span className={styles.originalPrice}> R{discountedPrice}</span>
          
         
          </>
        
      )}  
      </p>
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