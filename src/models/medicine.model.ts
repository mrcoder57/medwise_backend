import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true
      },
      dosage: {
        type: Number,
        required: true
      },
      medicineType: {
        type: String,
        enum: ['bottle', 'syringe', 'tablet', 'pill'],
        required: true
      },
      remindMeInHr: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: false
      }
  },
  {
    timestamps: true,
  }
);

export const MedcineModel = mongoose.model("medicine", MedicineSchema);