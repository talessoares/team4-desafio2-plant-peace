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


const CardPlant = ({ plant }: { plant: Plant }) => {

  if (!plant) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.card}>
      <img src={plant.imgUrl} alt={plant.name} />
      <h1>{plant.name}</h1>
      <p>{plant.price}</p>
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
