'use client'
import { projects } from '@/constant/project'
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";
import React, { useState } from 'react'

type Props = {}

const Projects = (props: Props) => {
  const [copiedSl, setCopiedSl] = useState(0);
  return (
    <section className='py-10'>
      <div className='layout'>
        <div>
          <h2 className='heading'>Projects</h2>
          <p className='text-xl max-w-[550px]'>I have worked on several projects, here are some of them.</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-20'>
          {projects.map((item) =>
            <div className='relative border border-gray-400 rounded-lg md:rounded-lg xl:rounded-xl p-2'
            >
              {/* <iframe src={item.liveUrl} className='w-full h-[300px] rounded xl:rounded-xl'
              /> */}
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src={item.liveUrl}
                  title={`${item.title} preview`}
                  className="w-full h-full pointer-events-none"
                  style={{
                    border: "none",
                    overflow: "hidden",
                  }}
                  scrolling="no"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black font-medium rounded-lg shadow"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className='mt-5 relative'>
                <h3 className='text-xl'>{item.title}</h3>
                <p className='text-sm'>{item.description}</p>
                <div className='mt-5'>
                  <h4 className='text-sm'>Industries</h4>
                  <ul className='flex flex-wrap'>
                    {item.industries.map((industry) => (
                      <li className='mr-2'>{industry}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="absolute top-0 right-0"
                  onClick={() => {
                    navigator.clipboard.writeText(item.liveUrl);
                    setCopiedSl(item.sl);
                  }}
                >
                  {copiedSl === item.sl ? (
                    <FaClipboardCheck className="w-6 h-6 text-green-500" />
                  ) : (
                    <FaRegClipboard className="w-6 h-6 text-gray-200 hover:text-blue-400" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { Projects }

