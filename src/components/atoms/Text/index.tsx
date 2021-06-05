import React from 'react'

type TextProps = {
  as?: 'p' | 'strong' | 'a'
  children: React.ReactNode
  weight?: 'normal' | 'bold'
  color?: 'heading' | 'body' | 'white'
  size?:  'xl' | 'lg' |'base'  | 'sm'
  className?: string
}

export function Text({
  as = 'p',
  children,
  weight = 'normal',
  color = 'body',
  size = 'base',
  className
}: TextProps) {

  const Element = () => React.createElement(as, {
    className: `text-${size} text-${color} font-${weight} font-text ${className}`,
    children
  })

  return (
    <Element />
  )
}
