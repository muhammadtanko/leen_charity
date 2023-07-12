import { Footer } from "@comp/footer";
import { NavBar } from "../components/NavBar"
import { Services } from "@comp/services"
const Service = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Services />
        <Footer />
      </main>

    </div>
  )
}
export default Service;