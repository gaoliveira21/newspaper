import { Button, Text } from "@/components/atoms";

export function Banner() {
  return (
    <div className="w-100 px-2 py-4 my-4 h-72 flex flex-col justify-end relative overflow-hidden ">
      <div className="w-full h-full bg-black z-10 absolute top-0 left-0 opacity-30" />
      <img src="/img/banner.png" alt="Banner" className="absolute w-full top-0 left-0 h-full object-cover" />

      <Text as="strong" size="lg" color="white" weight="bold" className="z-10">
        Send in the Bugs. The Michelangelos Need Cleaning.
      </Text>


      <div className="sm:w-2/4 text-justify my-1 z-10">
        <Text color="white">
          Last fall, with the Medici Chapel in Florence operating on reduced hours
          because of Covid-19, scientists and restorers completed a secret expe...
        </Text>
      </div>

      <Button className="z-10 w-2/4 md:w-60">
        read more
      </Button>
    </div>
  )
}
