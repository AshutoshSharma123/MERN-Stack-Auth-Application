import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl font-semibold my-7 text-center'>Sign-up</h1>
                <form action="" className='flex flex-col gap-4'>
                    <input type="text" placeholder='Username' id='username' className='bg-slate-100 rounded-lg p-3' />
                    <input type="email" placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3' />
                    <input type="password" placeholder='Password' id='password' className='bg-slate-100 rounded-lg p-3' />
                    <button className='bg-slate-800 text-white rounded-lg hover:opacity-95 disabled:opacity-70 p-3'>Sign Up</button>
                    <button className='bg-red-800 text-white rounded-lg hover:opacity-95 disabled:opacity-70 p-3'>Sign-up with Google</button>
                </form>
                <div className='flex items-center flex-col justify-center py-4'>
                    <h3>Already have an account ?</h3>
                    <Link to='/sign-in'><h4 className='text-blue-600 font-bold'>Sign-in</h4></Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

