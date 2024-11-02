import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='border-b'>
      <div className='layout py-20'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-y-10'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-[100px] leading-[1] font-heading text-white'>Hi, I am <br /> Amdadul Haque</h1>
            <p className='text-base xl:text-xl max-w-[550px]'>Dhaka, Bangladesh based full stack engineer, passotionate to build high-end software solution for you.</p>
          </div>
          <div className='w-full md:w-1/2 max-w-[450px] flex justify-center md:justify-end relative group'>
            <Image
              src={"/images/me-2.jpg"}
              alt='Amdadul Haque'
              width={600}
              height={600}
              className='rounded-xl w-full max-w-[450px] h-auto transition'
            />
            <div className='absolute w-full h-full top-2 left-2 hero-img bg-red-200 rounded-xl -z-10 group-hover:-top-2 group-hover:-left-2 duration-300 ease-in-out'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }