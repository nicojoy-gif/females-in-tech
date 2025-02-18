import React from 'react'
import punch from '../../../../public/Assets/punch.png'
import buj from '../../../../public/Assets/Buj.png'
import ont from '../../../../public/Assets/Ontecx.png'
import Image from 'next/image'
function Features() {
  return (
    <div>
        <div className=''>
<h2 className='text-mediumblack text-center font-semibold py-4 text-3xl'>As Featured In</h2>
<div className='grid md:grid-cols-3 grid-cols-1'>
<Image src={punch} alt='punch' className='' />
<Image src={buj} alt='buj' className='w-full h-96'/>
<Image src={ont} alt='ont' className=''/>
</div>
        </div>
    </div>
  )
}

export default Features