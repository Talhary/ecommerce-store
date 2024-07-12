"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/actions/get-products";
import { useStore } from "@/utils/store";
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'
const ClientComponent = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useStore();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProduct(id);
        console.log(response);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        setProduct(response.product[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return null; // Or handle initial state before product fetch
  }

  return (
    <div className=" relative z-0">
    <div className="absolute z-10  left-5 top-5" >
    <Link href={'/'}>
     <IoArrowBackCircle size={40} color=""  />
     </Link>
   </div>
    <div className=" w-[400px] max-h-screen grid md:grid-cols-2 gap-6 lg:gap-12 items-start  px-4 mx-auto py-6">
     
      <div className="grid gap-4 md:gap-10 items-start">
        <Image
          src={  product.src}
          alt="Product Image"
          height={400}
          width={400}
          className="md:hidden mx-auto max-w-20 aspect-[2/3] object-contain border rounded-lg overflow-hidden"
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div>
            <p>{product.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">${product.price}</div>
          </div>
        </div>

        <div className="grid gap-2"></div>
        <div className="grid gap-2"></div>
        <Button
          onClick={(e) => {
            console.log(product);
            addToCart(product);
          }}
          size="sm"
        >
          Add to Cart
        </Button>
      </div>
    </div>
    </div>
  );
};

export default ClientComponent;
