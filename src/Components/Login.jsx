import React, { useState } from 'react'
import { BsFillPersonFill, BsFillLockFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [data, setdata] = useState("")
    let submit = async (e) => {
        e.preventDefault();
        let response = await fetch("https://rsfpsoftware.gowild.co.in/dashboard/login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ username, password })

        })

        response = await response.json();
        if (response.token) {
            localStorage.setItem('token',"Token"+" "+response.token);

            navigate("/nav")


        }
    }

        return (
            <div className="bg-gray-300 h-screen flex justify-center items-center  ">
                <div className='bg-white flex p-8 rounded-2xl '>
                    <div >
                        <div className='flex  mb-2 mt-7'>
                            <img src='images/RSFP-logo (3).png' className='w-6 h-9' />
                            <h2 className="font-bold text-roboto text-3xl  text-green-600">RSFP</h2>
                        </div>
                        <h2 className='font-bold text-poppins'>Log into your account</h2>
                        <p className='text-yellow-400 text-xs mt-1'>Enter your username and password to login</p>


                        <form className="pt-6 mb-4 relative ">
                            <div className="mb-4 relative">
                                <BsFillPersonFill className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    className="shadow pl-10 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => { setusername(e.target.value) }}

                                />
                            </div>
                            <div className="mb-6 relative">
                                <BsFillLockFill className="absolute left-2 top-5 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    className="shadow pl-10 appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                />
                                <div className="flex items-center ml-2">
                                    <input type="checkbox" id="rememberMe" className="mr-2" />
                                    <label className='font-bold text-poppins' htmlFor="rememberMe">Remember me</label>
                                </div>

                            </div>
                            <div className="flex items-center justify-between">
                                <button type="button" onClick={submit} className="text-white bg-yellow-400 focus:ring-4focus:outline-none font-medium rounded-lg text-sm  pr-20 pl-20 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-5 mb-2">

                                    Login
                                </button>

                            </div>
                        </form>




                    </div>
                    <div className='ml-10'>
                        <img src='images/image 1.png ' className="w-72 h-auto" />

                    </div>


                </div>

            </div>



        )
    }

    export default Login