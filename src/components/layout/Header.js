'use client'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
  const session = useSession()
  const status = session?.status
  const userData = session.data?.user
  let userName = userData?.name || userData?.email
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0]
  }
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full bg-white shadow-md py-4 px-6">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold mx-auto">
          <Link className="mr-8 text-primary font-semibold text-2xl" href={'/'}>
            <Image src={'/logo.png'} alt={'Logo'} width={250} height={250} />
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/#Menu'}>Menu</Link>
          <Link href={'/#about'}>Sobre Nosotros</Link>
        </nav>
      </header>
      <main className="pt-20">{/* Contenido de la página */}</main>
    </>
  )
}

// return (
//   <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full bg-white shadow-md py-4 px-6">
//     <nav className="flex items-center gap-8 text-gray-500 font-semibold mx-auto">
//       <Link className="text-primary font-semibold text-2xl" href={'/'}>
//         <Image src={'/logo.png'} alt={'Logo'} width={150} height={150} />
//       </Link>
//       <div className="flex items-center gap-4">
//         <Link href={'/'}>Home</Link>
//         <Link href={'/#Menu'}>Menu</Link>
//         <Link href={'/#about'}>Sobre Nosotros</Link>
//       </div>
//     </nav>
//   </header>
// )
