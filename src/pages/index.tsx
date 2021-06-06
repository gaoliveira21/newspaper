import { Heading } from "@/components/atoms";
import { Banner, News } from "@/components/molecules";
import { AppTemplate } from "@/components/templates/AppTemplate";

export default function Home() {
  return (
    <AppTemplate>
      <Banner />

      <section className="my-3">
        <Heading as="h3" className="mb-2">Movies</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <News />
          <News />
          <News />
          <News />
        </div>
      </section>

      <section className="my-3">
        <Heading as="h3" className="mb-2">Books</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <News />
          <News />
          <News />
          <News />
        </div>
      </section>

    </AppTemplate>
  )
}
