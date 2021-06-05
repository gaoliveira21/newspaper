import React from 'react'

type TextProps = {
  as?: 'p' | 'strong'
  children: React.ReactNode
  weight?: 'normal' | 'bold'
  color?: 'heading' | 'body' | 'white'
  size?: 'base' | 'lg' | 'sm'
}

export function Text({
  as = 'p',
  children,
  weight = 'normal',
  color = 'body',
  size = 'base'
}: TextProps) {

  const Element = () => React.createElement(as, {
    className: `text-${size} text-${color} font-${weight} font-text`,
    children
  })

  return (
    <Element />
  )
}
