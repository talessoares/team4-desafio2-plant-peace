import mongoose, { Document, Schema } from 'mongoose';

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

const PlantSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  label: [String],
  price: { type: String, required: true },
  isInSale: { type: Boolean, required: true },
  discountPercentage: { type: Number, required: true },
  features: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true }
});

const Plant = mongoose.model<IPlant>('Plant', PlantSchema);

export default Plant;
