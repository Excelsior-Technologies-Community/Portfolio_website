import React from 'react'
import { Heading } from './Heading'

export const Contact = () => {
    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <div className="flex flex-col gap-6">
                <Heading text='Contact' />
                <span className='text-xl light leading-8'>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </span>
            </div>
            <form className="flex flex-col gap-3 w-full">

                <div className="flex items-center gap-3 max-lg:flex-col">
                    <input type="text" className='card-shadow w-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Name' />
                    <input type="text" className='card-shadow w-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Email' />
                </div>
                <div className="flex items-stretc gap-3">
                    <textarea type="text" className='card-shadow w-full h-full outline-0  rounded-xl light px-8 py-5 focus:border-[#60a5fa]!' placeholder='Enter Your Message' />
                </div>
                <button type="text" className='card-shadow w-full outline-0 cursor-pointer rounded-xl light px-8 py-5 hover:border-[#60a5fa]!' placeholder='Enter Your Email ' >
                    Submit
                </button>

            </form>
        </div>
    )
}
