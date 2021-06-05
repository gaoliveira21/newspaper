import { Container, Heading } from "@/components/atoms";
import { Banner, Footer, Navbar } from "@/components/molecules";
import { Header } from "@/components/organisms/Header";

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
