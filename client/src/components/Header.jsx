import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-slate-200 ' >
            <div className="flex justify-between items-center mx-auto max-w-6xl ">
                <Link to='/'>    <h1 className='font-bold '>Auth Application</h1></Link>

                <ul className='flex gap-4'>
                    <Link to='/'><li>HOME</li></Link>
                    <Link to='/about'><li>ABOUT</li></Link>
                    <Link to='/sign-in'><li>SIGN-IN</li></Link>



                </ul>
            </div>

        </div>
    )
}

export default Header
