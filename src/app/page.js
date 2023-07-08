import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero";
import { ServiceSwiper } from "./components/serviceSwiper"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ServiceSwiper/>
      </main>
    </>
  )
}
