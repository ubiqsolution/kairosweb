import Header from './sections/Header'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import WhyUs from './sections/WhyUs'
import Services from './sections/Services'
import WhoFor from './sections/WhoFor'
import Steps from './sections/Steps'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTAFooter from './sections/CTAFooter'
import BackToTop from './sections/BackToTop'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhyUs />
        <Services />
        <WhoFor />
        <Steps />
        <Testimonials />
        <FAQ />
        <CTAFooter />
      </main>
      <BackToTop />
    </>
  )
}
