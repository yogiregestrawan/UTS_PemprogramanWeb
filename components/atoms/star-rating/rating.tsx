type StarRatingProps = {
    rating: number
    maxRating?: number
    className?: string
  }
  
  export default function StarRating({ rating, maxRating = 5, className = "" }: StarRatingProps) {
    return (
      <div className={`flex ${className}`}>
        {[...Array(maxRating)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FFD700" : "none"}
            stroke={i < rating ? "#FFD700" : "#D1D5DB"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    )
  }
  