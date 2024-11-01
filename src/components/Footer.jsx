import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <>
    <hr/>
    <footer className='py-12'>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className=' flex flex-colitems-center justify-center'>
          <div className='flex space-x-4'> 
            <FaFacebook size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
          </div>

        </div>
       <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} All rights reserved.
          <p className='text-sm ml-4 '> Thanks for visitng....💚</p>
          </p> 

       </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
