type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      id="btn"
      className="px-5 py-2 rounded-none border-2 border-primary min-w-200 uppercase text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-200"
    >
      {children}
    </button>
  )
}
