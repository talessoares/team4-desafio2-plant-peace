import styles from "./Form.module.css";
import mainPlant from "../../assets/images/mainPlant.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface PlantForm {
  plantName: string;
  plantSubtitle: string;
  plantType: string;
  price: number;
  discountPercentage: number;
  label: string;
  features: string;
  description: string;
  discountPrice?: number;
  imgUrl?: string;
}

const Form = () => {
  const [registerButton, setRegisterButton] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlantForm>();

  const clearFormInputs = (): void => {
    const inputs = document.querySelectorAll<HTMLInputElement>("input");
    inputs.forEach((input) => {
      input.value = "";
    });

    const textareas = document.querySelectorAll<HTMLInputElement>("textarea");
    textareas.forEach((textarea) => {
      textarea.value = "";
    });

    const radios = document.querySelectorAll<HTMLInputElement>(
      "input[type='radio']"
    );
    radios.forEach((radio) => {
      radio.checked = false;
    });
  };

  const transformNameToSnakeCase = (name: string): string => {
    return name
      .split(" ")
      .join("_")
      .toLowerCase();
  }

  const onData = async (data: PlantForm) => {
    clearFormInputs();
    data.imgUrl = transformNameToSnakeCase(data.plantName);
    try {
      const response = await fetch("http://localhost:5000/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return false;
      }

      setRegisterButton(true);
    } catch (error) {
      console.error("Erro ao buscar plant");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles["form-container"]}>
          <form action="plant-form">
            <h1>Plant registration</h1>
            <div className={styles["form-inputs"]}>
              <label htmlFor="plant-form">Plant name</label>
              <input
                type="text"
                placeholder="Echinocereus Cactus"
                {...register("plantName", {
                  required: true,
                })}
              />
              {errors?.plantName?.type === "required" && (
                <p className={styles.error}>Plant name is required</p>
              )}
            </div>
            <div className={styles["form-inputs"]}>
              <label htmlFor="plant-form">Plant subtitle</label>
              <input
                type="text"
                placeholder="A majestic addition to your plant collection"
                {...register("plantSubtitle", {
                  required: true,
                })}
              />
              {errors?.plantSubtitle?.type === "required" && (
                <p className={styles.error}>Plant subtitle is required</p>
              )}
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="plant-form">Plant type</label>
              <input
                type="text"
                placeholder="Cactus"
                {...register("plantType", {
                  required: true,
                })}
              />
              {errors?.plantType?.type === "required" && (
                <p className={styles.error}>Plant type is required</p>
              )}
            </div>

            <div className={styles["form-radio"]}>
              <div className={styles.price}>
                <label htmlFor="plant-form">Price</label>
                <input
                  type="number"
                  placeholder="$139.99"
                  {...register("price", {
                    required: true,
                  })}
                />
                {errors?.price?.type === "required" && (
                  <p className={styles.error}>Price is required</p>
                )}
              </div>

              <div className={styles.price}>
                <label htmlFor="plant-form">Discount percentage</label>
                <input
                  type="number"
                  {...register("discountPrice")}
                  placeholder="20%"
                />
              </div>
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="plant-form">Label:</label>
              <div id={styles.radio}>
                <div>
                  <input type="radio" value="indoor" {...register("label")} />
                  <label htmlFor="indoor">Indoor</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="outdoor"
                    {...register("label")}
                    name="outdoor"
                  />
                  <label htmlFor="outdoor">Outdoor</label>
                </div>
              </div>
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="plant-form">Features</label>
              <div id={styles.textarea}></div>

              <textarea
                {...register("features")}
                className={styles.textarea}
                name="features"
                id="features"
                placeholder="Species: Echinocereus..."
              ></textarea>

              <label htmlFor="plant-form">Description</label>
              <textarea
                {...register("description")}
                className={styles.textarea}
                name="description"
                id="description"
                placeholder="Ladyfingers cactus..."
              ></textarea>
            </div>
          </form>
          <button onClick={() => handleSubmit(onData)()} type="submit">
            {registerButton ? "Plant registered" : "Register"}
          </button>
        </div>
        <img src={mainPlant} alt="Green Plant" />
      </div>
    </>
  );
};

export default Form;
