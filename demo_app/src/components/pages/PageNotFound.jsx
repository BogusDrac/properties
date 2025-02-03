import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"
const PageNotFound = () => {
  return (
    <section className="text-center   flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <h1 className="text-6xl font-bold dark:text-orange-600 mb-4">
            Uyaphi
        </h1>
        <p className="text-xl mb-5 dark:text-orange-600">
            This page does not exist
        </p>
        <Link
            to="/"
            className="text-white bg-gray-300 hover:bg-gray-700 dark:bg-orange-500 dark:hover:bg-orange-900 rounded-xl px-3 py-2 mt-4"
        >
            Go Back
        </Link>
    </section>
  )
}

export default PageNotFound