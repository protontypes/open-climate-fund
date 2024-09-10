import ClientHeader from '../components/ClientHeader'
import Hero from '../components/Hero'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <ClientHeader />
      <Hero />
      <About />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </main>
  )
}
