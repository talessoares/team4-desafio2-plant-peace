import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styles from "./Sale.module.css";
import CardPlant from "../CardPlant/CardPlant";
import "@splidejs/react-splide/css";
import axios from "axios";

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

const Sale = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get<Plant[]>(
          `https://apiplantpeace-env.eba-dk8vswwi.us-east-2.elasticbeanstalk.com/api/plants`
        );
        const data = response.data;
        console.log("Dados das plantas recebidos:", data);

        const filteredPlants = data.filter(
          (plant) => plant.discountPercentage > 0
        );

        setPlants(filteredPlants);
      } catch (error) {
        console.error("Erro ao buscar plantas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  plants.filter((plant) => plant.isInSale === true);

  if (loading) {
    return <div>Carregando plantas...</div>;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <span> Plants in </span> Sale
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
              767: { perPage: 1 },
              480: { perPage: 2 },
              425: { perPage: 1 },
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

export default Sale;
