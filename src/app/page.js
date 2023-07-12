import { NavBar } from "@comp/NavBar"
import { Hero } from "@comp/Hero";
import { Carousel } from "@comp/carousel"
import { ServiceSummary } from "@comp/ServiceSummary"
import { Services } from "@comp/services";
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
        <Services />
        <Testimonial />
        <DonationCta />
        <Footer />
      </main>
    </>
  )
}
