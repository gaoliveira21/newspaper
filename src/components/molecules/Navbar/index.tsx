import { Link } from '../Link'

export function Navbar () {
  return (
    <ul className="flex w-full justify-between my-4 sm:w-3/6 md:w-2/5">
      <li>
        <Link href="#">News</Link>
      </li>
      <li>
        <Link href="#">Opinion</Link>
      </li>
      <li>
        <Link href="#" className="text-primary">Arts</Link>
      </li>
      <li>
        <Link href="#">Living</Link>
      </li>
      <li>
        <Link href="#">More</Link>
      </li>
    </ul>
  )
}
