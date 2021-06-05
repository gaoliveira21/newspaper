type ContainerProps = {
  children: React.ReactNode | React.ReactNodeArray
}

export function Container ({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl w-11/12 mx-auto">{children}</div>
  )
}
