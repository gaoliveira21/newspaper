import { Button, Contrast, Text } from '@/components/atoms'

import { NewsModel } from '@/shared/models/News'

type BannerProps = {
  data: NewsModel
}

export function Banner({ data: { image, title, excerpt } }: BannerProps) {
  return (
    <div className="w-100 px-2 py-4 my-4 h-72 flex flex-col justify-end relative overflow-hidden ">
      <Contrast />
      <img src={image} alt="Banner" className="absolute w-full top-0 left-0 h-full object-cover" />

      <Text as="strong" size="lg" color="white" weight="bold" className="z-10">
        {title}
      </Text>


      <div className="sm:w-2/4 text-justify my-1 z-10">
        <Text color="white">
          {excerpt}
        </Text>
      </div>

      <Button className="z-10 w-2/4 md:w-60">
        read more
      </Button>
    </div>
  )
}
