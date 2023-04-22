import Link from 'next/link'
import Image from "next/image"

const Card = ({lien, title, text, image}) => {
  return (
    <Link href={lien} className={`w-11/12 shadow-lg mx-auto md:w-1/5 flex flex-rw flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
        <div className="w-full">
          <Image className='w-full object-cover object-center md:h-48 h-60' src={image} alt="image"/>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white w-full">{title}</h5>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">1/11/2000</p>
          <span className='bg-blue-100 text-blue-800 text-xs font-medium py-1.5 px-2.5 rounded dark:bg-gray-700 border border-blue-500 w-max'>Tous</span>
        </div>
    </Link>
  )
}

export default Card