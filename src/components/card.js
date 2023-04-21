import Link from 'next/link'
import Image from "next/image"

const Card = ({lien, title, text, image, width}) => {
  return (
    <Link href={lien} className={`${width} flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}>
        <div className="w-full">
            <Image src={image} alt="image"/>
        </div>
        <div className="w-full flex flex-row justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
        </div>
    </Link>
  )
}

export default Card