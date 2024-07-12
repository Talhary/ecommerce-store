'use client'
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
const images = ['/image1.jpg','/image2.jpg','/image3.jpg']
export function ImageSlider() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  
 

  React.useEffect(() => {
    if (!api) {
      return
    }
    console.log(api)
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
        
            setCurrent(api.selectedScrollSnap() + 1)
    
    })
  }, [api])

  return (
    <div className="flex items-center justify-center flex-col">
      <Carousel setApi={setApi} className="w-[50%] ">
        <CarouselContent>
          {images.map((el,index)=>(
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center p-1">
                  <Image src={el} alt='Image' className=" object-cover w-[400px] h-[400px] max-h-[400px]"/>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide <span className="bg-black  text-white p-1 rounded-full dark:text-white dark:bg-white"> {current}</span> of {count}
      </div>

    </div>
  )
}
