
const router = express.Router();
const Medicine = require('../models/medicine.model');
import express, { Request, Response } from 'express'

router.post('/medicine/add', async (req:Request, res:Response) => {
    try {
      const {name,dosage,medicineType,remindMeInHr,image} = new Medicine(req.body);
      await Medicine.create({name,dosage,medicineType,remindMeInHr,image});
     console.log(Medicine)
     
      res.status(201).json(Medicine);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.get('/medicine/get', async (req: Request, res: Response) => {
    try {
      const medicines = await Medicine.find({});
      res.status(200).json(medicines);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
      if (!deletedMedicine) {
        return res.status(404).json({ message: 'No medicine found with the provided ID' });
      }
      res.status(200).json(deletedMedicine);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
  export default router;

