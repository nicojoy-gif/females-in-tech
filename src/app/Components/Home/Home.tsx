import React from 'react'
import Hero from './Hero'
import Bosstext from './Bosstext'
import Network from './Network'
import Focus from '../Focus/Focus'
import Innovate from '../Innovate/Innovate'
import Service from '../Service/Service'
import Found from '../Found/Found'
import Works from '../Works/Works'
import Newsletter from '../Footer/Newsletter'
import Footer from '../Footer/Footer'
import Investor from '../Investors/Investor'
import Equity from '../Equity/Equity'
import Build from './Build'
import FeatureBuild from '../Features/Build'
import Features from '../Features/Features'
import Blog from '../Blog/Blog'
import { NavBar } from '../Navbar'
import { Studio } from '../Studio'
function HomePage() {
  return (
    <div className='bg-lightgrey w-full'>
      <NavBar sections={["About", "SP", "Studio", "SEEQ", "Platforms", "Initiatives", "More"]} />

        <div className='h-full bg-white' id='about'>
        
        <Hero />
        </div>
        <div className='w-5/6  mx-auto'>
        <Bosstext/>
        </div>
        <div className='hidden md:block' id='sp'>
<Network />
</div>
<div className='md:hidden block' >
<Build />
</div>
<Focus />
<Innovate />
<Service />
<div id='studio'>
<Studio />
</div>
<div id='seeq'>
<Found />
</div>
<Works />
<Investor />
<div id='platforms'>
<Equity />
</div>
<div id='initiatives'>
<Blog />
</div>
<div className='hidden md:block' >
<FeatureBuild />
</div>
<div id='more'>
<Newsletter />
</div>
<Footer />
    </div>
  )
}

export default HomePage