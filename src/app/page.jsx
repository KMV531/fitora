import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <section>
      <div className='bg-[#1C1B27]'>
        <Header />
        <Hero />
      </div>
      <About />
      <Programs />
      <Services />
      <Testimonials />
      <Footer />
    </section>
  )
}
