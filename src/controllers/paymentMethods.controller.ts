import { Request, Response } from "express";
import PaymentMethodsDB from "../models/paymentMethods.model";

async function getPaymentMethods(req: Request, res: Response) {
  try {
    const products = await PaymentMethodsDB.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
}

async function getPaymentMethod(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await PaymentMethodsDB.findOne({
      where: {
        id_payment_method: id,
      },
    });
    res.json(product);
  } catch (error) {
    console.log(error);
  }
}

async function addPaymentMethod(req: Request, res: Response) {
  const { name } = req.body;
  try {
    const product = await PaymentMethodsDB.create({
      name: name,
    });
    res.status(200).json("Added correctly");
  } catch (error) {
    console.log(error);
  }
}

async function editPaymentMethod(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const product = await PaymentMethodsDB.update(
      {
        name: name,
      },
      {
        where: {
          id_payment_method: id,
        },
      }
    );
    res.status(200).json("Edited correctly");
  } catch (error) {
    console.log(error);
  }
}

async function deletePaymentMethod(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await PaymentMethodsDB.destroy({
      where: {
        id_payment_method: id,
      },
    });
    res.status(200).json("Deleted correctly");
  } catch (error) {
    console.log(error);
  }
}

export {
  getPaymentMethods,
  getPaymentMethod,
  addPaymentMethod,
  editPaymentMethod,
  deletePaymentMethod,
};
