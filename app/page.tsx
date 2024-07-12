import {ImageSlider} from '@/components/image-slider'
import Header from '@/components/ui/header';
import Placeholder from '@/components/ui/placeholder';
import Footer from '@/components/ui/footer'
import {SliderCart} from '@/components/ui/slider-cart';
export default function Home() {
  return (
    <>
    <nav className=''>
      <div className=' '>
      <Header />
    </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between px-10  ">
      <Placeholder/>
     
   </main>
    
    <footer>
      <Footer/>
    </footer>
    </>
  );
}
