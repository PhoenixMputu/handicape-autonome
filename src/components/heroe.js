import Image from "next/image";
import Link from "next/Link"

function Heroe({ image, title, text, label, lien }) {

    const customLoader = ({ src }) => {
        return `https://media.istockphoto.com/id/1423295087/fr/vectoriel/${src}?s=612x612&w=0&k=20&c=sFOZXNs_ZT84o_OaYAo-ib1dwJN9oYGrPfCXdefTWYI=`
      }
    
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{text}</p>
                <Link href={lien} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    {label}
                </Link> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image className="w-full h-auto" src={image} width={612} height={612} alt="mockup" loader={customLoader}/>
            </div>
        </div>
    </section>
  );
}

export default Heroe;
