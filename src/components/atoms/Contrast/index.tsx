type ContrastProps = {
  percent?: '30' | '40' | '50' | '60'
}

export function Contrast ({ percent = '30' }: ContrastProps) {
  return <div className={`w-full h-full bg-black z-10 absolute top-0 left-0 opacity-${percent}`} />
}
