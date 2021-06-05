import { Link } from '../Link'

export function Navbar() {
  return (
    <nav className="flex w-full justify-between my-4 sm:w-3/6 md:w-2/5">
      <Link href="#">News</Link>
      <Link href="#">Opinion</Link>
      <Link href="#" className="text-primary">Arts</Link>
      <Link href="#">Living</Link>
      <Link href="#">More</Link>
    </nav>
  )
}
