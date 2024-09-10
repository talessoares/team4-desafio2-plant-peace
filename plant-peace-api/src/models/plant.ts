import mongoose, { Document, Schema } from 'mongoose';

// Interface do modelo
export interface IPlant extends Document {
  id: number;
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgUrl: string;
}

// Definição do esquema com o nome da coleção especificado
const PlantSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  label: { type: [String], required: true },
  price: { type: String, required: true },
  isInSale: { type: Boolean, required: true },
  discountPercentage: { type: Number, required: true },
  features: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true }
}, { collection: 'plants' }); // Alterar 'your-custom-collection-name' para o nome desejado

const Plant = mongoose.model<IPlant>('Plant', PlantSchema);

export default Plant;
