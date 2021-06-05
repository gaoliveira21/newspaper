type ButtonProps = {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      id="btn"
      className={`px-5 py-2 bg-primary rounded-none uppercase text-white font-bold hover:bg-primary hover:opacity-95 transition-opacity duration-200 ${className}`}
    >
      {children}
    </button>
  )
}
