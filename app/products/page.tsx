

'use client'
import { Button } from "@/components/ui/button"
import { products } from "@/utils/products"
import { useStore } from "@/utils/store"
import Image from "next/image"
import Link from "next/link"
import { IoArrowBackCircle } from "react-icons/io5"
const Component = ({params}:{params:{id:string}})=> {
  
    const {addToCart} = useStore()
  return (
    <div className="w-full relative z-0">
       <div className="absolute z-10  left-5 top-5" >
       <Link href={'/'}>
        <IoArrowBackCircle size={40} color="white"  />
        </Link>
      </div>
      <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
        <h1 className= "text-center text-3xl font-bold">T-Shirt Collection</h1>
      </header>
      <main className="container mx-auto py-12 px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
       
        {products.map((product,i)=>{
            return (
                <div key={i} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Image src={product.src} alt="T-Shirt 1" width={400} height={500} className="w-full h-64 object-contain" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
<div className="flex gap-x-10">

<Button variant={'outline'} onClick={(e:any)=>{
                          addToCart(product)
                          
                        }} size="sm">Add to Cart</Button>
                        <Button size="sm">
                          <a href={'/item/'+product.id} >Details</a>
                        </Button>
    
    </div>                </div>
              </div>
            )
        })}
      </main>
    </div>
  )
}
export default Component