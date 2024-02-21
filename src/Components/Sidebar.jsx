import React from 'react'
import Home from './Home'
import Greeting from './Greeting'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigation=useNavigate()
    const logout=()=>{
        localStorage.removeItem('token');
        navigation('/')
    
      }
    return (

        <div class="flex h-screen bg-gray-100">


            <div className=" flex-col w-64 bg-[#fdb92b]">
                <div class="flex items-center justify-center h-16 mb-2 mt-3 ">
                    <img src='images/RSFP-logo (3).png' className='w-9 h-11 ' />
                    <h2 className="font-bold text-roboto text-3xl ml-2  text-green-600">RSFP</h2>
                </div>
                <hr />
                <div class="flex items-center  h-13 mb-2 mt-3 ">
                    <div class="flex items-center justify-start ml-5">
                        <img src='images/Rectangle 7.png' className='w-9 h-11 ' />
                        <div>
                            <h2 className="font-bold text-roboto text-sm ml-2  ">Admin name</h2>
                            <h2 className=" text-roboto text-xs ml-2   ">Super Admin</h2>
                        </div>

                    </div>
                    <div class="flex items-center justify-end ">
                        <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex ml-12 items-center  text-sm font-medium text-center    dark:text-black " type="button">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </button>


                        <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                            </div>
                        </div>
                    </div>


                </div>
                <hr />

                <div class="flex flex-col flex-1 overflow-y-auto">
                    <nav class="flex-1 px-2 py-4 bg-{FDB92B}">
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Dashboard Layout.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Dashboard <span className='ml-14'>{'>'}</span>
                        </a>
                        
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Rupee.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Payments  <span className='ml-12'>{'>'}</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Packing (1).png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Purchase order  <span className='ml-12'>{'>'}</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Shipped.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                             Shipments  <span className='ml-12'>{'>'}</span>
                        </a>
                        <hr/>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Dashboard Layout.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Dashboard   <span className='ml-12'>{'>'}</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Dashboard Layout.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Dashboard  <span className='ml-12'>{'>'}</span>
                        </a>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Dashboard Layout.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Dashboard  <span className='ml-12'>{'>'}</span>
                        </a>
                        <hr/>
                        <a href="#" class="flex items-center px-4 py-2  hover:bg-white">
                            <img src="images/Settings.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                Setting   <span className='ml-12'>{'>'}</span>
                        </a>
                        <hr/>

                        <a href="#" class="flex items-center px-4 py-2  mt-3 hover:bg-white">
                            <img src="images/iMac Exit.png" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"/>
                              
                            
                                <span onClick={logout}>Logout</span>
                        </a>
                    </nav>
                    

                </div>
            </div>

            <div class="flex flex-col flex-1 overflow-y-auto">
                <div class="flex items-center justify-between h-12 bg-green-600 border-b border-gray-200">
                    <div class="flex items-center px-4">
                        {/* <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                       </svg>
                       </button> */}
                        <h2 className="font-bold text-roboto text-2xl  text-white">Dashboard</h2>
                    </div>
                    <div class="flex  pr-5">

                        <div>

                            <Greeting />
                        </div>
                    </div>
                </div>

                <Home />

            </div>

        </div>
    )
}

export default Sidebar