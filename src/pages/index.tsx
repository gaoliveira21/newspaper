import { Container } from "@/components/atoms";
import { Navbar } from "@/components/molecules";
import { Header } from "@/components/organisms/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Navbar />
    </Container>
  )
}
