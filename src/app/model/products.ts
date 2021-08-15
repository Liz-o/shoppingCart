import { Product } from "./product";
import { ProductType } from "./productType";

export const PRODUCTS:Product[] = [
    new Product(1, 1, ProductType.Dresses, 'Long Dress', 100),
    new Product(2, 1, ProductType.Dresses, 'Short Dress', 80),
    new Product(3, 1, ProductType.Shirts, 'Long Shirt', 80),
    new Product(4, 2, ProductType.Shirts, 'T-shirt', 50),
    new Product(5, 2, ProductType.Pants, 'Long Pants', 130),
    new Product(6, 3, ProductType.Pants, 'Short Pants', 90)
]