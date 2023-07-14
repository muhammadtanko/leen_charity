import { NavBar } from "@comp/NavBar"
import { Hero } from "@comp/Hero";
import { Carousel } from "@comp/carousel"
import { ServiceSummary } from "@comp/ServiceSummary"
import { Testimonial } from "@comp/testimonial"
import { DonationCta } from "@comp/donationCta";
import { Footer } from "@comp/footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Carousel />
        <ServiceSummary />
        <Testimonial />
        <DonationCta />
        <Footer />
      </main>
    </>
  )
}
