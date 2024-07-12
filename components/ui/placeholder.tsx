"use client";
import { getAllItems } from "@/actions/fetch/getItems";
// import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { useStore } from "@/utils/store";
import { products } from "@/utils/products";
import { IoHome } from "react-icons/io5";
export default () => {
  const [isPending, startTransition] = useTransition();


  // useEffect(() => {
  //   startTransition(() => {
  //     getItems(
  //       ` {
  //         products  (first:2){

  //           edges {
  //             node {
  //               id
  //               title
  //               createdAt
  //               tags
  //               status
  //               totalInventory
  //               featuredImage{
  //                 url
  //                 id
  //                 height
  //                 width
  //               }

  //             }
  //           }
  //         }
  //       }
  //          `,
  //       {}
  //     ).then((res) => {
  //       console.log(res)
  //       setProducts(res)
  //     });
  //   });
  // }, []);
  // useEffect()
  // useEffect(() => {
  //   // getAllItems()

  // }, []);
  const { addToCart } = useStore();
  return (
    <main className="flex-1 " >
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <img
            src="/image1.jpg"
            width="550"
            height="550"
            alt="Hero Product"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the perfect product for you
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Browse our curated collection of T-Shirts.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Exclusive Discounts and Promotions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't miss out on our limited-time offers and discounts. Shop
                now and save big on our premium t-shirts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold">25%</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Off All T-Shirts
                  </div>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold">30%</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Off Bundle Deals
                  </div>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-4xl font-bold">Free</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Shipping on Orders Over $50
                  </div>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                New Arrivals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover Our Latest T-Shirt Designs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our newest t-shirt collections and be the first to
                rock the latest trends.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products &&
                products?.map((product: any,i:any) => {
                  return (
                    <Card key={i} className="max-w-sm mx-auto  bg-background rounded-lg shadow-lg overflow-hidden">
                       <div className="h-[350px] flex items-center justify-center">
                       <img
                        src={product.src}
                        alt={product.alt}
                        width={300}
                        height={400}
                        className="mx-auto overflow-hidden rounded-t-lg object-contain"
                      />
                       </div>
                      <CardContent className="p-4 flex flex-col items-center">
                        <div className="text-lg font-medium mb-2">
                          {product.name}
                        </div>
                        <div className="text-muted-foreground mb-4">$24.99</div>
                        <div className="flex items-center gap-x-5 justify-between">
                        <Button size="sm" className="" name={product.id} onClick={(e:any)=>{
                          console.log(product)
                          addToCart(product)
                          
                        }}>
                          
                          Add to Cart
                        </Button>
                        <Button size="sm" variant={'outline'}>
                          <a href={'/item/'+product.id} >Details</a>
                        </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
   
    </main>
  );
};
