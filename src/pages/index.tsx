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
      <Text>SIGN IN</Text>
      <Link href="#">
        Link
      </Link>
    </Container>
  )
}
