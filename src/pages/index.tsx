import { GetStaticProps } from 'next'

import { Banner } from '@/components/molecules'
import { NewsSection } from '@/components/organisms'
import { AppTemplate } from '@/components/templates/AppTemplate'

import { NewsModel } from '@/shared/models/News'

type HomeProps = {
  topStory: NewsModel
  movies: NewsModel[],
  books: NewsModel[]
}

export default function Home({ books, movies, topStory }: HomeProps) {
  return (
    <AppTemplate>
      <Banner data={topStory} />

      <NewsSection data={movies} title="Movies" />
      <NewsSection data={books} title="Books" />

    </AppTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const BASE_URL = 'http://localhost:3333'

  const responses = await Promise.all([
    fetch(`${BASE_URL}/movies`),
    fetch(`${BASE_URL}/books`),
    fetch(`${BASE_URL}/top_story`)
  ])

  const news = await Promise.all(responses.map(response => response.json()))

  const [movies, books, topStory] = news

  return {
    props: { movies, books, topStory },
    revalidate: 60
  }
}
