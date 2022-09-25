import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleClick = url => {
        setShowMenu(false)
        Router.push(url)
    }

    const fetchCategories = async () => {
        let url = process.env.NEXT_PUBLIC_API_URL + 'categories'
        await axios.get(url).then(res => {
            let { success, data } = res.data
            if (success) setCategories(data)
        })
    }
    return (
        <div className="dark:bg-gray-900">
            <div className=" mx-auto relative">
                <div className="py-4 ">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
                        <div>
                            <div className="px-4 hidden lg:block cursor-pointer" role="img" aria-label="Packt Publication.">
                                <Link href={'/'}>
                                    <div className="flex items-end">
                                        <img src="https://www.packtpub.com/images/logo-new.svg" alt="Packt " />
                                        <span className="pl-2 text-orange-600 font-extrabold">Publication</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="hidden md:block lg:hidden cursor-pointer" role="img" aria-label="Packt Publication.">
                                <div className=" pl-4  flex items-end">
                                    <img src="https://www.packtpub.com/images/logo-new.svg" alt="Packt " />
                                    <span className="pl-2 text-orange-600 font-extrabold">Publication</span>
                                </div>
                            </div>
                            <div className="md:hidden cursor-pointer" role="img" aria-label="Packt Publication.">
                                <div className=" pl-4 flex items-end w-full">
                                    <img src="https://www.packtpub.com/images/logo-new.svg" alt="Packt " />
                                    <span className="pl-2 text-orange-600 font-extrabold">Publication</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block pr-4">
                            <ul className="flex items-center space-x-6">
                                {categories?.map(category => (
                                    <li key={category.id}>
                                        <Link href={`/category/${category.slug}`}>
                                            <a className="cursor-pointer hover:font-bold dark:text-white dark:hover:text-gray-300 text-sm text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                {category.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:hidden pr-4">
                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <div className="mt-4 pb-4 px-5 flex space-x-3 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <svg className="fill-stroke text-gray-600 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search for books" className="focus:outline-none bg-transparent text-sm text-gray-600" />
                    </div> */}
                </div>
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}>
                    <div className="w-full">
                        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
                            <div role="img" aria-label="Packt Publication">
                                <div className="flex items-end w-full">
                                    <img src="https://www.packtpub.com/images/logo-new.svg" alt="Packt " />
                                    <span className="pl-2 text-orange-600 font-extrabold">Publication</span>
                                </div>
                            </div>
                            <button aria-label="close menu" onClick={() => setShowMenu(false)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 mx-4">
                        <ul className="flex flex-col space-y-4">
                            {categories?.map(category => (
                                <li key={category.slug}
                                    className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-700 pb-4 px-1 flex items-center justify-between">
                                    {/* <Link href={`/category/${category.slug}`}> */}
                                    <a
                                        href onClick={() => handleClick(`/category/${category.slug}`)}
                                        className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                                        {category.title}
                                    </a>
                                    {/* </Link> */}
                                    {/* <button aria-label="Add" className="pl-2 dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.3335V12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
