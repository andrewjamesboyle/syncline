import { MetaTags } from '@redwoodjs/web'

import About from 'src/components/About/About'
import Contact from 'src/components/Contact/Contact'
import Hero from 'src/components/Hero/Hero'
import Services from 'src/components/Services/Services'
import Testimonials from 'src/components/Testimonials/Testimonials'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
