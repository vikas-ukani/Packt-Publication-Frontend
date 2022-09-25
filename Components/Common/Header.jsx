import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

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
                        <div className="hidden md:block">
                            <ul className="flex items-center space-x-6">
                                {categories?.slice(0, 4)?.map(category => (
                                    <li key={category.id}>
                                        <Link href={`/category/${category.slug}`}>
                                            <a className="cursor-pointer hover:font-bold dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                                {category.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <a aria-label="my account"  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a aria-label="Favourites"  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.4578 2.59133C18.9691 2.08683 18.3889 1.68663 17.7503 1.41358C17.1117 1.14054 16.4272 1 15.7359 1C15.0446 1 14.3601 1.14054 13.7215 1.41358C13.0829 1.68663 12.5026 2.08683 12.0139 2.59133L10.9997 3.63785L9.98554 2.59133C8.99842 1.57276 7.6596 1.00053 6.26361 1.00053C4.86761 1.00053 3.52879 1.57276 2.54168 2.59133C1.55456 3.6099 1 4.99139 1 6.43187C1 7.87235 1.55456 9.25383 2.54168 10.2724L3.55588 11.3189L10.9997 19L18.4436 11.3189L19.4578 10.2724C19.9467 9.76814 20.3346 9.16942 20.5992 8.51045C20.8638 7.85148 21 7.14517 21 6.43187C21 5.71857 20.8638 5.01225 20.5992 4.35328C20.3346 3.69431 19.9467 3.09559 19.4578 2.59133V2.59133Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a aria-label="Bag"  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded">
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div className="md:hidden">
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
                                <svg className="fill-stroke text-gray-800 dark:text-white" width={37} height={17} viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.76 14.14C3.76 14.6867 3.87333 15.0667 4.1 15.28C4.32667 15.48 4.72 15.58 5.28 15.58V16C4.05333 15.9467 3.24667 15.92 2.86 15.92C2.47333 15.92 1.66667 15.9467 0.44 16V15.58C1 15.58 1.39333 15.48 1.62 15.28C1.84667 15.0667 1.96 14.6867 1.96 14.14V2.72C1.96 2.10667 1.84667 1.66 1.62 1.38C1.39333 1.1 1 0.959999 0.44 0.959999V0.539999C0.853333 0.579999 1.26667 0.599999 1.68 0.599999C2.52 0.599999 3.21333 0.506666 3.76 0.319999V14.14ZM15.3827 13.84C15.3827 14.4533 15.496 14.9 15.7227 15.18C15.9493 15.46 16.3427 15.6 16.9027 15.6V16.02C16.4893 15.98 16.076 15.96 15.6627 15.96C14.8227 15.96 14.1293 16.0533 13.5827 16.24V13.88C13.2627 14.7067 12.8093 15.3133 12.2227 15.7C11.636 16.0867 10.996 16.28 10.3027 16.28C9.39599 16.28 8.70266 16.0267 8.22266 15.52C7.98266 15.2533 7.80932 14.9133 7.70266 14.5C7.60932 14.0867 7.56266 13.5533 7.56266 12.9V7.88C7.56266 7.26667 7.44932 6.82 7.22266 6.54C6.99599 6.26 6.60266 6.12 6.04266 6.12V5.7C6.45599 5.74 6.86932 5.76 7.28266 5.76C8.12266 5.76 8.81599 5.66667 9.36266 5.48V13.34C9.36266 13.8467 9.38932 14.26 9.44266 14.58C9.50932 14.8867 9.64932 15.14 9.86266 15.34C10.0893 15.54 10.4293 15.64 10.8827 15.64C11.3893 15.64 11.8493 15.48 12.2627 15.16C12.676 14.84 12.996 14.4067 13.2227 13.86C13.4627 13.3 13.5827 12.6867 13.5827 12.02V7.88C13.5827 7.26667 13.4693 6.82 13.2427 6.54C13.016 6.26 12.6227 6.12 12.0627 6.12V5.7C12.476 5.74 12.8893 5.76 13.3027 5.76C14.1427 5.76 14.836 5.66667 15.3827 5.48V13.84ZM26.2238 14.58C26.4638 14.9133 26.6638 15.1533 26.8238 15.3C26.9971 15.4333 27.2104 15.5267 27.4638 15.58V16C26.7704 15.9467 26.2971 15.92 26.0438 15.92C25.5904 15.92 24.8038 15.9467 23.6838 16V15.58C23.8971 15.58 24.0771 15.54 24.2238 15.46C24.3838 15.38 24.4638 15.2733 24.4638 15.14C24.4638 15.0467 24.4371 14.9667 24.3838 14.9L22.1038 11.58L20.6438 13.48C20.2704 13.9733 20.0838 14.3733 20.0838 14.68C20.0838 14.96 20.2104 15.18 20.4638 15.34C20.7304 15.4867 21.0971 15.5733 21.5638 15.6V16C20.8704 15.96 20.1104 15.94 19.2838 15.94C18.6971 15.94 18.1904 15.96 17.7638 16V15.6C18.0304 15.5733 18.2971 15.4533 18.5638 15.24C18.8438 15.0267 19.1638 14.68 19.5238 14.2L21.8238 11.18L19.0438 7.12C18.7771 6.73333 18.5638 6.48 18.4038 6.36C18.2438 6.22667 18.0438 6.14667 17.8038 6.12V5.7C18.4971 5.75333 18.9704 5.78 19.2238 5.78C19.6771 5.78 20.4638 5.75333 21.5838 5.7V6.12C21.3704 6.12 21.1838 6.16 21.0238 6.24C20.8771 6.32 20.8038 6.42667 20.8038 6.56C20.8038 6.65333 20.8304 6.73333 20.8838 6.8L23.0238 9.92L24.4038 7.98C24.8038 7.40667 25.0038 6.98667 25.0038 6.72C25.0038 6.53333 24.9104 6.39333 24.7238 6.3C24.5504 6.19333 24.2638 6.12667 23.8638 6.1V5.7C24.5571 5.74 25.1171 5.76 25.5438 5.76C26.1304 5.76 26.6371 5.74 27.0638 5.7V6.1C26.5171 6.16667 25.9304 6.63333 25.3038 7.5L23.2838 10.3L26.2238 14.58ZM36.6428 13.6C36.4028 14.3333 35.9495 14.9667 35.2828 15.5C34.6295 16.02 33.8361 16.28 32.9028 16.28C31.9561 16.28 31.1361 16.0667 30.4428 15.64C29.7495 15.2 29.2161 14.5933 28.8428 13.82C28.4828 13.0333 28.3028 12.1267 28.3028 11.1C28.3028 9.94 28.4895 8.93333 28.8628 8.08C29.2361 7.22667 29.7628 6.57333 30.4428 6.12C31.1228 5.65333 31.9161 5.42 32.8228 5.42C34.0228 5.42 34.9428 5.78667 35.5828 6.52C36.2361 7.24 36.5628 8.34 36.5628 9.82H30.3028C30.2628 10.1933 30.2428 10.62 30.2428 11.1C30.2428 11.98 30.3828 12.7467 30.6628 13.4C30.9561 14.0533 31.3361 14.56 31.8028 14.92C32.2828 15.2667 32.7828 15.44 33.3028 15.44C33.9428 15.44 34.5095 15.2867 35.0028 14.98C35.4961 14.6733 35.9095 14.16 36.2428 13.44L36.6428 13.6ZM32.7428 5.8C32.1161 5.8 31.5761 6.10667 31.1228 6.72C30.6695 7.33333 30.3895 8.24 30.2828 9.44H34.6428C34.6695 8.4 34.5161 7.53333 34.1828 6.84C33.8628 6.14667 33.3828 5.8 32.7428 5.8Z"
                                        fill="currentColor"
                                    />
                                </svg>
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
                                    <Link href={`/books/${category.slug}`}>
                                        <a  className="dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">

                                            {category.title}
                                        </a>
                                    </Link>
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
