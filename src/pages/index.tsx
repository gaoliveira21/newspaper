import { Container, Heading } from "@/components/atoms";
import { Banner, Navbar, News } from "@/components/molecules";
import { Header, Footer } from "@/components/organisms";

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Navbar />
        <Heading className="text-center sm:order-first">Arts</Heading>
      </div>
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <News />
        <News />
        <News />
        <News />
      </div>

      <Footer />
    </Container>
  )
}
