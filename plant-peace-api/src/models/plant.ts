import mongoose, { Document, Schema } from 'mongoose';


export interface IPlant extends Document {
  id: string;
  name: string;
  subtitle: string;
  label: string;
  price: string;
  isInSale: boolean;
  discountPercentage: number;
  features: string;
  description: string;
  imgBase64: string;
}


const PlantSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  label: { type: String, required: true },
  price: { type: String, required: true },
  isInSale: { type: Boolean, required: true },
  discountPercentage: { type: Number, required: true },
  features: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true } 
}, { collection: 'plants' }); 

const Plant = mongoose.model<IPlant>('Plant', PlantSchema);

export default Plant;