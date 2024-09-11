import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./Sale.module.css";
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

const Sale = () => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      const fetchPlants = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/plants`);
  
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
          }
  
          const data: Plant[] = await response.json();
          console.log("Dados das plantas recebidos:", data);
  
          setPlants(data);
        } catch (error) {
          console.error("Erro ao buscar plantas:", error);
        }  finally {
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
          <span>   Plants in </span>  Sale
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
              1024: { perPage: 3 },
              991: { perPage: 3 },
              767: { perPage: 3 },
              480: { perPage: 3 },
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
  )
}

export default Sale