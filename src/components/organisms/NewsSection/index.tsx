import { Heading } from '@/components/atoms'
import { News } from '@/components/molecules'

type NewsSection = {
  title: string
}

export function NewsSection({ title }: NewsSection) {
  return (
    <section className="my-3">
      <Heading as="h3" className="mb-2">{title}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <News />
        <News />
        <News />
        <News />
      </div>
    </section>
  )
}
