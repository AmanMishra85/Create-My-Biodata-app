import React from 'react'
import FirstSection from './FirstSection'
import ThirdSection from './ThirdSection'
import Footer from './Footer'
import SecondSection from '../Check/SecondSection'

function Home() {
  return (
    <div>
        <section>
            <FirstSection/>
        </section>
        <section>
          <SecondSection/>
        </section>
        <section>
          <ThirdSection/>
        </section>
        <section>
          <Footer/>
        </section>
    </div>
  )
}

export default Home