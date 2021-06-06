import { Container, Heading } from "@/components/atoms";
import { Banner, Navbar } from "@/components/molecules";
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
      <Footer />
    </Container>
  )
}
