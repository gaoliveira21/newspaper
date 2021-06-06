import Image from 'next/image'

import { Contrast, Text } from '@/components/atoms'

import { NewsModel } from '@/shared/models/News'

type NewsProps = {
  data: NewsModel
}

export function News({ data: { title, excerpt, image } }: NewsProps) {
  return (
    <div className="w-full group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-index:50">
      <div className="relative">
        <Image
          src={image}
          width={1920}
          height={1280}
          layout="responsive"
        />
        <div className="w-full h-full absolute top-0 flex items-end p-2">
          <Contrast />
          <Text as="strong" className="z-10" size="base" color="white" weight="bold">{title}</Text>
        </div>
      </div>
      <Text className="truncate my-2">{excerpt}</Text>
    </div>
  )
}
