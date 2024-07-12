import { products } from "@/utils/products"
export const getProduct = async (id:string)=>{
   const product = products.filter((product)=> product.id==id)
   if(!product) return {ok:false}
   return {ok:true,product}
}