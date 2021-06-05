import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Link } from "@/components/molecules/Link";
import { Logo } from "@/components/atoms/Logo";
import { Text } from "@/components/atoms/Text";

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
