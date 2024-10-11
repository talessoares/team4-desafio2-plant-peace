import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import CardPlant from "../../components/CardPlant/CardPlant";

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

const Products: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get<Plant[]>(
          "https://apiplantpeace-env.eba-dk8vswwi.us-east-2.elasticbeanstalk.com/api/plants"
        );
        setPlants(response.data);
        setFilteredPlants(response.data);
      } catch (error) {
        console.error("Error searching for plants", error);
        setError("Error fetching plants");
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  useEffect(() => {
    const results = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlants(results);
  }, [searchQuery, plants]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.title}>Products Catalog</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search plants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      {filteredPlants.length === 0 ? (
        <div>Nenhuma planta encontrada.</div>
      ) : (
        <div className={styles.plantsList}>
          {filteredPlants.map((plant) => (
            <CardPlant key={plant._id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
