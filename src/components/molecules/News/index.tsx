import { Text } from '@/components/atoms'
import Image from 'next/image'

export function News() {
  return (
    <div className="w-full group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-index:50">
      <div className="relative">
        <Image
          src="/img/movies/mv-01.png"
          width={1920}
          height={1280}
          layout="responsive"
        />
        <div className="w-full h-full absolute top-0 flex items-end p-2">
          <div className="w-full h-full bg-black absolute top-0 left-0 opacity-30" />
          <Text as="strong" className="z-10" size="base" color="white" weight="bold">Watch Emma Stone Become ‘Cruella’</Text>
        </div>
      </div>
      <Text className="truncate my-2">The director Craig Gillespie discusses the formation of the title character in a scene from his film, which also features Emma Thompson.</Text>
    </div>
  )
}
