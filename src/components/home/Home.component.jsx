import Hero from "./hero/Hero.component";
import Clients from "./clients/Clients.component";
import Partners from "./partners/Partners.component";
import Features from "./features/Features.component";
import Benefits from "./benefits/Benefits.component";


function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Partners />
      <Features />
      <Benefits />
    </>
  )
}

export default Home