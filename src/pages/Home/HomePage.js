import { Hero } from "./components/Hero";
import {useTitle} from "../../hooks/useTitle";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  useTitle("Access Latest Computer Science E - Books")
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}