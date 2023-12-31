import { nanoid } from "@reduxjs/toolkit"

const ProductList = [
  {
    "id": 11,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 24,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "1",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/1.jpg",
  },
  {
    "id": 12,
    "value":0,
    "title": "Computer",
    "description": "Mega Discount, Impression of A...",
    "price": 55,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "3",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/2.jpg",
  },
  {
    "id": 13,
    "value":0,
    "title": "Shampoo",
    "description": "Mega Discount, Impression of A...",
    "price": 63,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "2",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/11/3.jpg",
  },
  {
    "id": 14,
    "value":0,
    "title": "Massage Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 413,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "0",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/14/1.jpg",
  },
  {
    "id": 15,
    "value":0,
    "title": "Soap",
    "description": "Mega Discount, Impression of A...",
    "price": 137,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "4",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/10/1.jpg",
  },
  {
    "id": 16,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 183,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "5",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/15/2.jpg",
  },
  {
    "id": 17,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 93,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "0",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/15/3.jpg",
  },
  {
    "id": 18,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 74,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "3",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/16/4.jpg",
  },
  {
    "id": 19,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "2",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/9/1.jpg",
  },
  {
    "id": 20,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "1",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/17/2.jpg",
  },
  {
    "id": 21,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "0",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/18/3.jpg",
  },
  {
    "id": 22,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "2",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/8/1.jpg",
  },
  {
    "id": 23,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "5",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/8/2.jpg",
  },
  {
    "id": 24,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "4",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/7/1.jpg",
  },
  {
    "id": 25,
    "value":0,
    "title": "perfume Oil",
    "description": "Mega Discount, Impression of A...",
    "price": 13,
    "discountPercentage": 8.4,
    "rating": 4.26,
    "stock": "0",
    "brand": "Impression of Acqua Di Gio",
    "category": "fragrances",
    "thumbnail": "https://i.dummyjson.com/data/products/7/2.jpg",
  }
]

export default ProductList