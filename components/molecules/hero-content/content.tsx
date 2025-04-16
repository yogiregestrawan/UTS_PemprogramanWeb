import Badge from "@/components/atoms/badge/badge"
import Button from "@/components/atoms/button/button"

export default function HeroContent() {
  return (
    <div className="relative z-10 py-5">
      <Badge className="mb-6 text-black py-3 rounded-xl" icon={<div className="mr-2 h-5 w-5 rounded-full  bg-yellow-400 "></div>}>
        #1 Digital company in the town!
      </Badge>

      <h1 className="mb-6 text-5xl font-bold leading-tight text-black">
        Amet Sed
        <br />
        Cursus Eu
        <br />
        Tellus Eget.
      </h1>

      <p className="mb-8 text-gray-600">
        Vitae augue elementum ullamcorper porta adipiscing dui, consequat enim quam. Nisi rhoncus vitae orci duis diam
        eget faucibus. Nulla enim sit nibh sed.
      </p>

      <div className="flex flex-wrap gap-4 py-5">
        <Button variant="primary">Connect With Us</Button>
        <Button variant="text" href="#">
          Browse Our Works
        </Button>
      </div>
      <div
        className="absolute inset-0 z-0 bg-no-repeat opacity-100 size-900" 
        style={{ backgroundImage: "url('/bgn.svg')" }}
        aria-hidden="false"
      />

      <div
        className="w-full size-150 absolute top-1 bg-no-repeat left-225"
        style={{ backgroundImage: "url('/union.svg')" }}
        aria-hidden="true"
      />

      
    </div>

  )
}