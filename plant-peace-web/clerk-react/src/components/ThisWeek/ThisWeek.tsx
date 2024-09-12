import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./ThisWeek.module.css";
import CardPlant from "../CardPlant/CardPlant";
import "@splidejs/react-splide/css";

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

export const ThisWeek: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get<Plant[]>(`http://localhost:5000/api/plants`);
        const data = response.data;
        console.log("Dados das plantas recebidos:", data);
        const filteredPlants = data.filter((plant) => !plant.isInSale);
        setPlants(filteredPlants);
      } catch (error) {
        console.error("Erro ao buscar plantas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  if (loading) {
    return <div>Carregando plantas...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            This week's Most Popular <span> and best selling </span>
          </h1>
        </div>
        <Splide
          className={styles.carrouselBack}
          aria-label="Plantas da Semana"
          options={{
            perPage: 4,
            rewind: true,
            pagination: false,
            interval: 3000,
            focus: "center",
            arrows: true,
            breakpoints: {
              2560: { perPage: 5 },
              1920: { perPage: 4 },
              1732: { perPage: 4 },
              1600: { perPage: 3 },
              1440: { perPage: 3 },
              1200: { perPage: 3 },
              991: { perPage: 2 },
              767: { perPage: 2 },
              480: { perPage: 2 },
              425: { perPage: 2 },
            },
          }}
        >
          {plants.map((plant) => (
            <SplideSlide key={plant.id}>
              <div className={styles.app}>
                <CardPlant plant={plant} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
