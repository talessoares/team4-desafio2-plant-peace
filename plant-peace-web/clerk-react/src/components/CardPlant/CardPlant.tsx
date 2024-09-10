import React, { useEffect, useState } from "react";
import styles from "./CardPlant.module.css";

interface Plant {
  id: number;
  imgUrl: string;
  name: string;
  price: string;
  label: string[];
}

const CardPlant: React.FC = () => {
  const [plant, setPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/plants/1`);

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);
        setPlant(data);
      } catch (error) {
        console.error("Erro ao buscar planta:", error);
      }
    };

    fetchPlant();
  }, []);

  if (!plant) {
    return <div>Carregando planta...</div>;
  }

  return (
    <div className={styles.card}>
      <h1>{plant.name}</h1>
      <p>Preço: {plant.price}</p>
      <img src={`http://localhost:5000/assets/plant1.png`} alt={plant.name} width="200" />
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
