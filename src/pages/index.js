import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/navbar"
import Heroe from "../components/heroe"
import heroe2 from "../assets/heroe2.png"
import Image from "next/image"
import Card from "../components/card"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Heroe image="groupe-de-personnes-handicapées-en-fauteuil-roulant-et-autres-handicaps-handicap-et.jpg" title="Former les handicapés de Saint Gabriel" text="The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations" label="Faire un don" lien="/contribution"/>
      <main>
        <section className="px-4 py-8 md:px-8 md:px-12 lg:max-w-7xl mx-auto flex flex-row flex-wrap justify-between items-start bg-white dark:bg-gray-900">
          <div className='md:w-2/5w-full'>
            <Image
              src="data:image/jpeg;base64,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"
              width={500}
              height={500}
              alt="Logo Saint-Gabriel"
              className='mx-auto'
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <h2 className='text-center md:text-left tracking-tight leading-none text-3xl font-extrabold md:text-4xl xl:text-5xl mb-4 dark:text-white'>Une initiative de Saint Gabriel</h2>
            <p className='mb-6 text-center md:text-justify font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>Le composant d'image peut être utilisé pour intégrer des images à l'intérieur de la page Web dans des articles et des sections basés sur plusieurs styles, tailles, mises en page et animations de survol</p>
          </div>
        </section>
        <section className='w-full px-4 md:px-8 py-8 md:px-8 md:px-12 mx-0 bg-blue-300'>
          <h2 className='text-center tracking-tight leading-none text-3xl font-extrabold md:text-4xl xl:text-5xl mb-4 dark:text-white'>Bourses d'études disponibles</h2>
          <p className='mb-6 font-light text-center text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>Le composant d'image peut être utilisé pour intégrer des images à l'intérieur de la page Web dans des articles</p>
          <div className='mt-16 flex flex-row flex-wrap justify-between items-center gap-y-8'>
            <Card lien="/event/id" image={heroe2} text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." title="Noteworthy technology"/>
            <Card lien="/event/id" image={heroe2} text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." title="Noteworthy technology"/>
            <Card lien="/event/id" image={heroe2} text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." title="Noteworthy technology"/>
            <Card lien="/event/id" image={heroe2} text="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." title="Noteworthy technology"/>
          </div>
        </section>
      </main>
    </>
  )
}
