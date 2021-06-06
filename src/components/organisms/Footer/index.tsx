import { Heading, Text } from "@/components/atoms";
import { Link } from "@/components/molecules/Link";

export function Footer() {
  return (
    <footer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
      <div>
        <Text size="xl" color="heading" weight="bold" as="strong">News</Text>
        <ul>
          <li>
            <Link href="#">Home Page</Link>
          </li>
          <li>
            <Link href="#">World</Link>
          </li>
          <li>
            <Link href="#">Politics</Link>
          </li>
          <li>
            <Link href="#">Tech</Link>
          </li>
        </ul>
      </div>

      <div>
        <Text size="xl" color="heading" weight="bold" as="strong">Opinion</Text>
        <ul>
          <li>
            <Link href="#">Today's Opinion</Link>
          </li>
          <li>
            <Link href="#">Letters</Link>
          </li>
          <li>
            <Link href="#">Editorials</Link>
          </li>
        </ul>
      </div>

      <div>
        <Text size="xl" color="heading" weight="bold" as="strong">Arts</Text>
        <ul>
          <li>
            <Link href="#">Books</Link>
          </li>
          <li>
            <Link href="#">Dance</Link>
          </li>
          <li>
            <Link href="#">Movies</Link>
          </li>
          <li>
            <Link href="#">Theater</Link>
          </li>
        </ul>
      </div>

      <div>
        <Text size="xl" color="heading" weight="bold" as="strong">Living</Text>
        <ul>
          <li>
            <Link href="#">At Home</Link>
          </li>
          <li>
            <Link href="#">Games</Link>
          </li>
          <li>
            <Link href="#">Education</Link>
          </li>
          <li>
            <Link href="#">Food</Link>
          </li>
          <li>
            <Link href="#">Jobs</Link>
          </li>
          <li>
            <Link href="#">Love</Link>
          </li>
        </ul>
      </div>

      <div>
        <Text size="xl" color="heading" weight="bold" as="strong">Subscribe</Text>
        <ul>
          <li>
            <Link href="#">Home Delivery</Link>
          </li>
          <li>
            <Link href="#">Digital Subscriptions</Link>
          </li>
          <li>
            <Link href="#">Games</Link>
          </li>
          <li>
            <Link href="#">Cooking</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
