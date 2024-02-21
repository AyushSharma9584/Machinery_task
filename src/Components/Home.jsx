import React, { useEffect, useState } from 'react'


const Home = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
     const[data,setdata]=useState("");
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    useEffect(()=>{
          getdata();
    },[])

    const getdata =async () => {

        const response = await fetch("https://rsfpsoftware.gowild.co.in/dashboard/dashboard-statics", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            },
            
        });
        const json=await response.json()
        setdata(json)
        console.log(data);

    }
    return (
        <div>


            <div className='flex  items-center justify-between h-12  mt-5 der-b'>
                <div class=" items-center px-4">
                    <h2 className="font-bold text-roboto text-2xl  ">Dashboard</h2>
                    <h4>A quick data overview</h4>

                </div>



                <div className="flex px-6  ">
                    <div className="relative inline-block text-left ">
                        <button
                            type="button"
                            onClick={toggleDropdown1}
                            className="inline-flex  justify-center w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-black"
                            id="dropdown-button-1"
                            aria-expanded={isOpen1 ? "true" : "false"}
                            aria-haspopup="true"
                        >
                            Month Filter
                            <svg
                                className="-mr-1 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isOpen1 && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="dropdown-button-1"
                                tabIndex="-1"
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        Duplicate
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            onClick={toggleDropdown2}
                            className="inline-flex  justify-center w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            id="dropdown-button-2"
                            aria-expanded={isOpen2 ? "true" : "false"}
                            aria-haspopup="true"
                        >
                            Download Report
                            <svg
                                className="-mr-1 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isOpen2 && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="dropdown-button-2"
                                tabIndex="-1"
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        Archive
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        Move
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>






            </div>


            <div className='mt-7'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">

                    <div className="bg-gray-300 h-40 w-40 sm:w-full sm:mx-auto md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
                        <div className='flex flex-col justify-center mt-7'>
                            <div className='flex items-center justify-center'>
                                <img className='w-10' src='images/Vector (1).png' alt='Icon' />
                            </div>
                            <div className=' mt-2 flex items-center justify-center'>
                                <h2>349</h2>
                            </div>
                            <div className='flex mb-3 items-center justify-center'>
                                <h3>Total dues</h3>
                            </div>
                            <hr class="border-t-2 border-black"/>
                        <h3 className='flex items-center justify-center'>View detail Repor</h3>
                            
                        </div>
                      
                    </div>


                    
                    <div className="bg-gray-300 h-40 w-40 sm:w-full sm:mx-auto md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
                        <div className='flex flex-col justify-center mt-7'>
                            <div className='flex items-center justify-center'>
                                <img className='w-10' src='images/Vector (1).png' alt='Icon' />
                            </div>
                            <div className=' mt-2 flex items-center justify-center'>
                                <h2>349</h2>
                            </div>
                            <div className='flex mb-3 items-center justify-center'>
                                <h3>Total dues</h3>
                            </div>
                            <hr class="border-t-2 border-black"/>
                        <h3 className='flex items-center justify-center'>View detail Repor</h3>
                            
                        </div>
                      
                    </div>

                    <div className="bg-gray-300 h-40 w-40 sm:w-full sm:mx-auto md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
                        <div className='flex flex-col justify-center mt-7'>
                            <div className='flex items-center justify-center'>
                                <img className='w-10' src='images/Vector (1).png' alt='Icon' />
                            </div>
                            <div className=' mt-2 flex items-center justify-center'>
                                <h2>349</h2>
                            </div>
                            <div className='flex mb-3 items-center justify-center'>
                                <h3>Total dues</h3>
                            </div>
                            <hr class="border-t-2 border-black"/>
                        <h3 className='flex items-center justify-center'>View detail Repor</h3>
                            
                        </div>
                      
                    </div>


                   
                    <div className="bg-gray-300 h-40 w-40 sm:w-full sm:mx-auto md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
                        <div className='flex flex-col justify-center mt-7'>
                            <div className='flex items-center justify-center'>
                                <img className='w-10' src='images/Vector (1).png' alt='Icon' />
                            </div>
                            <div className=' mt-2 flex items-center justify-center'>
                                <h2>349</h2>
                            </div>
                            <div className='flex mb-3 items-center justify-center'>
                                <h3>Total dues</h3>
                            </div>
                            <hr class="border-t-2 border-black"/>
                        <h3 className='flex items-center justify-center'>View detail Repor</h3>
                            
                        </div>
                      
                    </div>


                    <div className="bg-gray-300 h-40 w-40 sm:w-full sm:mx-auto md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40">
                        <div className='flex flex-col justify-center mt-7'>
                            <div className='flex items-center justify-center'>
                                <img className='w-10' src='images/Vector (1).png' alt='Icon' />
                            </div>
                            <div className=' mt-2 flex items-center justify-center'>
                                <h2>349</h2>
                            </div>
                            <div className='flex mb-3 items-center justify-center'>
                                <h3>Total dues</h3>
                            </div>
                            <hr class="border-t-2 border-black"/>
                        <h3 className='flex items-center justify-center'>View detail Repor</h3>
                            
                        </div>
                      
                    </div>



                </div>

            </div>





        </div>
    )
}

export default Home