import React from 'react'
import Blog1 from '../../../../public/Assets/Frame 49268.png'
import Blog2 from '../../../../public/Assets/Frame 49269.png'
import Blog3 from '../../../../public/Assets/Frame 49275.png'

import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

function Blog() {
  return (
    <div className='py-8'>
      <h2 className='text-mediumblack text-3xl text-center font-medium mb-8'>Blogs & Resources</h2>
      <div className='grid w-5/6 my-4 mx-auto gap-6 md:grid-cols-3 grid-cols-1'>
        
        {/* Blog Post 1 */}
        <div className='flex flex-col space-y-3'>
          <Image src={Blog1} alt='blogone' className='w-full h-auto object-cover' />
          
        </div>

        {/* Blog Post 2 */}
        <div className='flex flex-col space-y-3'>
          <Image src={Blog2} alt='blogtwo' className='w-full h-auto object-cover' />
          
        </div>

        {/* Blog Post 3 */}
        <div className='flex flex-col space-y-3'>
          <Image src={Blog1} alt='blogthree' className='w-full h-auto object-cover' />
         
        </div>
      </div>
      <div className='grid w-5/6 my-4 mx-auto gap-6 md:grid-cols-3 grid-cols-1'>
      <div className='flex w-full justify-between items-center'>
      <div className='flex flex-col space-y-2'>
            <p className='font-semibold text-sm py-2'>Top Ten Most Powerful Startup</p>
            <p className='w-full'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
          </div>
          <div>
            <Image src={Blog3} alt='blog' />
          </div>
      </div>
      <div className='flex w-full justify-between items-center'>
      <div className='flex flex-col space-y-2'>
            <p className='font-semibold text-sm py-2'>Top Ten Most Powerful Startup</p>
            <p className='w-full'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
          </div>
          <div>
            <Image src={Blog3} alt='blog' />
          </div>
      </div>
      <div className='flex w-full justify-between items-center'>
      <div className='flex flex-col space-y-2'>
            <p className='font-semibold text-sm py-2'>Top Ten Most Powerful Startup</p>
            <p className='w-full'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
          </div>
          <div>
            <Image src={Blog3} alt='blog' />
          </div>
      </div>
      </div>
      <div className="my-6 flex md:hidden justify-center items-center">
<div className="font-semibold flex justify-center items-center underline text-mediumblack">
See More Blogs & Resources
<p className='mx-2'><FaArrowRight /></p>

</div>
      </div>
    </div>
  )
}

export default Blog
