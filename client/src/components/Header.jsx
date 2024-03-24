import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-slate-200 h-9 ' >
            <div className="flex justify-between items-center mx-auto max-w-6xl ">
                <Link to='/'>    <h1 className='font-bold '>Auth Application</h1></Link>

                <ul className='flex gap-4 font-semibold'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/sign-in'><li>Sign-in</li></Link>



                </ul>
            </div>

        </div>
    )
}

export default Header
