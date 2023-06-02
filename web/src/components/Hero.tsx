import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="flex flex-col items-center space-y-5 sm:place-items-start md:block">
      <Image
        className="w-28 place-self-start md:w-40"
        src={nlwLogo}
        alt="NLW Spacetime"
      />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-3xl font-bold leading-tight text-gray-50 sm:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
