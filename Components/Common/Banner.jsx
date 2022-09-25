
export default function Banner() {
    return (
        <div className="overflow-y-hidden ">
            <div className="relative flex justify-center items-center md:justify-start ">
                <img className="hidden lg:block  w-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_desktop.png" alt="randeer" />
                <img className="md:block lg:hidden hidden  w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_ipad.png" alt="randeer" />
                <img className="md:hidden w-full " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_mobile.png" alt="randeer" />
                <div className="flex absolute justify-start flex-col md:flex-row items-center">
                    <div className=" py-32 sm:py-20  md:hidden" />
                    <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                        <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3">
                            Access the most comprehensive eBook library in tech
                        </p>
                        <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">
                            All the practical content you’ll ever need to get the job done
                        </p>
                        <button className="mt-6 rounded-lg shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-orange-400 hover:border-orange-200 shadow shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-400 hover:text-orange-900 font-extrabold text-orange-300">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
