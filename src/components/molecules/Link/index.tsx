import NextLink from 'next/link'

import { Text } from '@/components/atoms/Text'

type LinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function Link({ href, children, className }: LinkProps) {
  return (
    <NextLink href={href}>
      <Text color="heading" weight="bold">
        <a className={`hover:text-primary cursor-pointer transition-colors duration-100 ${className}`}>{children}</a>
      </Text>
    </NextLink>
  )
}
