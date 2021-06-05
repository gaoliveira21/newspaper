type ButtonProps = {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      id="btn"
      className={`px-5 py-2 rounded-none border-2 border-primary uppercase text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  )
}
