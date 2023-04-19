import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/navbar"
import Heroe from "../components/heroe"
import heroe2 from "../assets/heroe2.png"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Heroe image={heroe2} title="Former les handicapés" text="The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations" label="Faire un don" lien="/contribution"/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World !</h1>
      <Link href="/event">Hello</Link>
      </main>
    </>
  )
}
