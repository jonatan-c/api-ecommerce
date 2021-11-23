import { Request, Response } from "express";
import ProductsDB from "../models/products.model";

async function getProducts(req: Request, res: Response) {
  try {
    const products = await ProductsDB.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
}

async function addProduct(req: Request, res: Response) {
  const { name_product, price_product } = req.body;
  try {
    const product = await ProductsDB.create({
      name_product: name_product,
      price_product: price_product,
    });
    res.status(200).json("Added correctly");
  } catch (error) {
    console.log(error);
  }
}

async function editProduct(req: Request, res: Response) {
  const { id } = req.params;
  const { name_product, price_product } = req.body;
  try {
    const product = await ProductsDB.update(
      {
        name_product: name_product,
        price_product: price_product,
      },
      {
        where: {
          id_product: id,
        },
      }
    );
    res.status(200).json("Edited correctly");
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const product = await ProductsDB.destroy({
      where: {
        id_product: id,
      },
    });
    res.status(200).json("Deleted correctly");
  } catch (error) {
    console.log(error);
  }
}

export { getProducts, addProduct, editProduct, deleteProduct };
