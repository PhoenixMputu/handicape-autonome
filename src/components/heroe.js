import Image from "next/image";
import Link from "next/Link"

function Heroe({ image, title, text, label, lien }) {
  return (
    <div
      id='heroe'
      className='px-4 mx-auto md:px-8 lg:max-w-7xl flex flex-row justify-between items-center'
    >
      <div className="w-1/2">
        <h1 className="font-sans text-5xl font-bold mb-4 text-blue-700">{title}</h1>
        <h4 className="mb-8 font-medium">{text}</h4>
        <Link href={lien} className="bg-blue-800 hover:bg-blue-500 text-white text-lg font-medium hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">{label}</Link>
      </div>
      <Image
        className='h-auto max-w-full'
        src={image}
        height="100"
        width='350'
        alt='Hello'
      />
    </div>
  );
}

export default Heroe;
