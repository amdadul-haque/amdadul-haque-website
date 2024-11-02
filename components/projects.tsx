import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className='py-10'>
      <div className='layout'>
        <div>
          <h2 className='heading'>Projects</h2>
          <p className='text-xl max-w-[550px]'>I have worked on several projects, here are some of them.</p>
        </div>
      </div>
    </section>
  )
}

export { Projects }