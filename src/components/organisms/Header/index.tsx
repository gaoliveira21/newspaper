import { Button, Logo } from '@/components/atoms'
import { Link } from '@/components/molecules'

export function Header() {
  return (
    <header>
      <div className="py-4 flex justify-center sm:justify-between items-center">
        <div className="hidden sm:block">
          <Link href="#">Search</Link>
        </div>

        <Logo />

        <div className="hidden md:flex items-center">
          <Link href="#" className="mr-4">SIGN IN</Link>
          <Button>SUBSCRIBE</Button>
        </div>
      </div>
    </header>
  )
}
