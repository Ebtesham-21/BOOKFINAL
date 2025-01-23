'use client';

import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(){
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('api/products')
        setProducts(response.data);
      } catch (error){
        console.log(error);
      }
    }
    fetchProducts()
  },
  [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) =>(
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>
  );

}
