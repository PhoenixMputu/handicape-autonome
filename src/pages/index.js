import Head from 'next/head'
import Link from 'next/link'
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World !</h1>
      <Link href="/event">Hello</Link>
    </main>
    </>
  )
}
