type LogoProps = {
    className?: string
  }
  
  export default function Logo({ className = "" }: LogoProps) {
    return (
      <span className={`text-xl font-bold text-black ${className}`}>
        <span className="text-yellow-400">Ace</span> Studios
      </span>
    )
  }
  