import { Footer, Header } from '@/components/organisms'
import { Navbar } from '@/components/molecules'
import { Container, Heading } from '@/components/atoms'

type AppTemplateProps = {
  children: React.ReactNode
}

export function AppTemplate({ children }: AppTemplateProps) {
  return (
    <Container>
      <Header />
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <Navbar />
        <Heading className="text-center sm:order-first">Arts</Heading>
      </div>
      {children}
      <Footer />
    </Container>
  )
}
