import styles from "./Form.module.css";
import mainPlant from "../../assets/images/mainPlant.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface PlantForm {
  name: string;
  subtitle: string;
  plantType: string;
  price: number;
  discountPercentage?: number;
  isInSale: boolean;
  label: string;
  features: string;
  description: string;
  discountPrice?: number;
  imgUrl?: string;
}

const Form = () => {
  const [registerButton, setRegisterButton] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlantForm>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);

      // Create a preview of the selected image
      const reader = new FileReader();

      reader.readAsDataURL(file);
    }
  };

  const clearFormInputs = (): void => {
    const inputs = document.querySelectorAll<HTMLInputElement>("input");
    inputs.forEach((input) => {
      input.value = "";
    });

    const textareas =
      document.querySelectorAll<HTMLTextAreaElement>("textarea");
    textareas.forEach((textarea) => {
      textarea.value = "";
    });

    const radios = document.querySelectorAll<HTMLInputElement>(
      "input[type='radio']"
    );
    radios.forEach((radio) => {
      radio.checked = false;
    });

    setSelectedImage(null);
  };

  const transformNameToSnakeCase = (name: string): string => {
    return name.split(" ").join("_").toLowerCase();
  };

  const uploadImage = async (plantName: string) => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("filename", plantName);

    try {
      const response = await fetch("http://localhost:5000/api/plants/img", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data.imageUrl; // Recebe a URL da imagem
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      return false;
    }
  };

  const onData = async (data: PlantForm) => {
    clearFormInputs();
    const plantNameInSnakeCase = transformNameToSnakeCase(data.name);

    // Enviar a imagem e os dados da planta simultaneamente
    const imageUploadPromise = uploadImage(plantNameInSnakeCase);

    // Preparar os dados da planta
    const plantData = { ...data, imgUrl: plantNameInSnakeCase + ".png" };
    if (data.discountPercentage !== undefined) {
      plantData.isInSale = true;
    }

    const plantDataPromise = fetch("http://localhost:5000/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    try {
      const [imageUrl, plantResponse] = await Promise.all([
        imageUploadPromise,
        plantDataPromise,
      ]);

      if (!plantResponse.ok) {
        console.error("Failed to create plant:", await plantResponse.text());
        toast.error("Failed to register the plant");
        return false;
      }

      setRegisterButton(true);
      toast.success("Plant registered successfully!", {
        position: "top-left",
        autoClose: 3000,
        icon: "🌱",
        style: {
          width: "400px",
          height: "100px",
          backgroundColor: "#354733",
          color: "#fff",
          padding: "16px",
          fontSize: "16px",
        },
      });
      console.log("imageUrl", imageUrl);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Error while registering the plant");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles["form-container"]}>
          <form>
            <h1>Plant registration</h1>
            <div className={styles["form-inputs"]}>
              <label htmlFor="name">Plant name</label>
              <input
                type="text"
                id="name"
                placeholder="Echinocereus Cactus"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className={styles.error}>Plant name is required</p>
              )}
            </div>
            <div className={styles["form-inputs"]}>
              <label htmlFor="subtitle">Plant subtitle</label>
              <input
                type="text"
                id="subtitle"
                placeholder="A majestic addition to your plant collection"
                {...register("subtitle", { required: true })}
              />
              {errors.subtitle && (
                <p className={styles.error}>Plant subtitle is required</p>
              )}
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="plantType">Plant type</label>
              <input
                type="text"
                id="plantType"
                placeholder="Cactus"
                {...register("plantType", { required: true })}
              />
              {errors.plantType && (
                <p className={styles.error}>Plant type is required</p>
              )}
            </div>

            <div className={styles["form-radio"]}>
              <div className={styles.price}>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  placeholder="$139.99"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <p className={styles.error}>Price is required</p>
                )}
              </div>

              <div className={styles.price}>
                <label htmlFor="discountPercentage">Discount percentage</label>
                <input
                  type="number"
                  id="discountPercentage"
                  {...register("discountPercentage")}
                  placeholder="20%"
                />
              </div>
            </div>

            <div className={styles["form-inputs"]}>
              <label>Label:</label>
              <div id={styles.radio}>
                <div>
                  <input
                    type="radio"
                    id="indoor"
                    value="indoor"
                    {...register("label", { required: true })}
                  />
                  <label htmlFor="indoor">Indoor</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="outdoor"
                    value="outdoor"
                    {...register("label", { required: true })}
                  />
                  <label htmlFor="outdoor">Outdoor</label>
                </div>
              </div>
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="features">Features</label>
              <textarea
                id="features"
                {...register("features", { required: true })}
                className={styles.textarea}
                placeholder="Species: Echinocereus..."
              ></textarea>

              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                className={styles.textarea}
                placeholder="Ladyfingers cactus..."
              ></textarea>
            </div>

            <div className={styles["form-inputs"]}>
              <label htmlFor="image" className={styles["upload-label"]}>
                <FontAwesomeIcon icon={faUpload} /> Upload your plant image
              </label>
              <input
                type="file"
                id="image"
                accept=".png"
                onChange={handleImageChange}
                className={styles["file-input"]}
              />
            </div>
          </form>
          <button
            className={styles["register"]}
            onClick={handleSubmit(onData)}
            type="button"
          >
            Register
          </button>
        </div>
        <img
          className={styles["main-plant"]}
          src={mainPlant}
          alt="Green Plant"
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default Form;
