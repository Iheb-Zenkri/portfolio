import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

interface Props {
    isDarkMode: boolean;
}

const Footer: React.FC<Props> = ({isDarkMode}) => {
  return (
    <div className='mt-10 mb-5'>
        <div className='text-center w-max flex items-center gap-2 mx-auto'>
           <Image src={isDarkMode ? assets.mailIconDark : assets.mailIcon} alt='' className='w-6'/>
           <a target='_blank' href="mailto:Zenkriiheb@gmail.com">Zenkriiheb@gmail.com</a>
        </div> 

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-6'>
            <p className='leading-none'>© 2025 Zenkri Iheb. All right reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li className='flex items-center justify-center gap-1'>
                    <Image src={isDarkMode ? assets.githubDark : assets.github} alt='' className='w-7'/> 
                    <a target='_blank' href="https://github.com/Iheb-Zenkri">Github</a>
                </li>
                <li className='flex items-center justify-center gap-1'>
                    <Image src={isDarkMode ? assets.linkedinDark : assets.linkedin} alt='' className='w-6'/>
                    <a target='_blank' href="https://linkedin.com/in/iheb-zenkri-8a6b10213">LinkedIn</a>
                </li>
                <li className='flex items-center justify-center gap-1'>
                    <Image src={isDarkMode ? assets.facebookDark : assets.facebook} alt='' className='w-6'/>
                    <a target='_blank' href="https://www.facebook.com/zenkri.iheb/">Facebook</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer