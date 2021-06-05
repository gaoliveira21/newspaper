import { Button, Container, Logo, Text } from "@/components/atoms";
import { Link } from "@/components/molecules/Link";

export default function Home() {
  return (
    <Container>
      <Logo />
      <Button>subscribe</Button>
      <Text>The director Craig Gillespie discusses the formation of the title chara...</Text>
      <Link href="#">
        Link
      </Link>
    </Container>
  )
}
