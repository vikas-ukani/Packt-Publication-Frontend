import axios from "axios"
import BooksGrid from "Components/Books/BooksGrid"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const CategrySlug = () => {
    const router = useRouter()

    const [category, setCategory] = useState(null)

    useEffect(() => {
        if (router.query.slug) fetchCategoryBySlug(router.query.slug)
    }, [router])

    const fetchCategoryBySlug = (slug) => {
        let url = `${process.env.NEXT_PUBLIC_API_URL}category/${slug}`
        axios.get(url).then(res => {
            let { success, data } = res.data
            if (success) {
                setCategory(data)
            }
        })
    }

    return (
        <div>
            <div className="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container flex justify-center items-center">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-sm leading-none text-gray-600">Home - Categories</p>
                        <div className="mt-2 flex flex-row justify-end items-center space-x-3">
                            <p className="text-2xl font-semibold leading-normal text-gray-800">{category?.title}</p>
                            <p className="text-base leading-4 text-gray-600 mt-2">({category?.books?.length || 0} books)</p>
                        </div>
                    </div>
                </div>
            </div>

            <BooksGrid category={category} />

        </div>
    );
}

export default CategrySlug;