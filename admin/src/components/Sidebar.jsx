import React from 'react'
import { NavLink } from 'react-router-dom'
import assets from '../assets/assets.js'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2 border-gray-300   '>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

                <NavLink to='/addnews' className='flex items-center gap-3 border-2 border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>Add News/Notice</p>
                </NavLink>

                <NavLink to='/addphotos' className='flex items-center gap-3 border-2 border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>Add Photos to Gallery</p>
                </NavLink>

                <NavLink to='/listnews' className='flex items-center gap-3 border-2 border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>List News/Notice</p>
                </NavLink>

                <NavLink to='/listphotos' className='flex items-center gap-3 border-2 border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>List Gallery</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar