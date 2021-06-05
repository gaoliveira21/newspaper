import React from 'react'

type HeadingProps = {
  as?: 'h2' | 'h3'
  children: React.ReactNode
  className?: string
}

export function Heading({
  as = 'h2',
  children,
  className
}: HeadingProps) {

  const size = {
    h2: 'text-5xl',
    h3: 'text-4xl'
  }

  const Element = () => React.createElement(as, {
    className: `${size[as]} text-heading font-bold font-heading ${className}`,
    children
  })

  return (
    <Element />
  )
}
