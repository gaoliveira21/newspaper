import { Heading } from '@/components/atoms'
import { News } from '@/components/molecules'

import { NewsModel } from '@/shared/models/News'

type NewsSection = {
  title: string
  data: NewsModel[]
}

export function NewsSection({ title, data }: NewsSection) {
  return (
    <section className="my-3">
      <Heading as="h3" className="mb-2">{title}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map(news => (
          <News key={news.id} data={news} />
        ))}
      </div>
    </section>
  )
}
