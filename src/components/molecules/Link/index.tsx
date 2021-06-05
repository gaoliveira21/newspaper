import NextLink from 'next/link'

import { Text } from '@/components/atoms/Text'

type LinkProps = {
  href: string
  children: React.ReactNode
}

export function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href}>
      <Text>
        <a className="hover:text-primary cursor-pointer">{children}</a>
      </Text>
    </NextLink>
  )
}
