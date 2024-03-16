import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import Signup from './Signup';
import { toast } from "react-hot-toast"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showComponent2, setShowComponent2] = useState(false);

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowComponent2(true);
        toast.success("Login successful")
    }

    return (
        <div className='h-screen w-96 flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-400'>
                    Login <span className='text-blue-500 flex justify-center text-2xl mt-5'>Saathi</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-400 label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-400 label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' href="#" className='text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>

                        <Link to="/"><button className='btn btn-block btn-sm bg-blue-600 text-gray-400 mt-5'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner' ></span> : 'Login'}
                        </button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login