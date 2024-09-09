import mongoose, { Schema, Document } from 'mongoose';

export interface IPlant extends Document {
  name: string;
  subtitle: string;
  label: string[];
  price: string;
  isInSale: boolean;
  discountPercentage?: number;
  features: string;
  description: string;
  imgUrl: string;
}

const plantSchema: Schema = new Schema({
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  label: { type: [String], required: true },
  price: { type: String, required: true },
  isInSale: { type: Boolean, required: true },
  discountPercentage: { type: Number },
  features: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

export default mongoose.model<IPlant>('Plant', plantSchema);
