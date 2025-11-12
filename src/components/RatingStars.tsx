import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const RatingStars = ({ 
  rating, 
  maxRating = 5, 
  reviewCount, 
  showText = true,
  size = "md",
  className = ""
}: RatingStarsProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const starSize = sizeClasses[size];
  const textSize = textSizeClasses[size];
  
  // Calcola il numero di stelle piene e la stella parziale
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  const partialStarPercentage = (rating % 1) * 100;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">
        {/* Stelle piene */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`${starSize} fill-yellow-400 text-yellow-400`}
          />
        ))}
        
        {/* Stella parziale */}
        {hasPartialStar && (
          <div className="relative">
            <Star 
              className={`${starSize} text-gray-300`}
            />
            <div 
              className="absolute top-0 left-0 overflow-hidden" 
              style={{ width: `${partialStarPercentage}%` }}
            >
              <Star 
                className={`${starSize} fill-yellow-400 text-yellow-400`}
              />
            </div>
          </div>
        )}
        
        {/* Stelle vuote */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`${starSize} text-gray-300`}
          />
        ))}
      </div>
      
      {showText && (
        <div className={`${textSize} font-semibold flex items-center gap-1`}>
          <span className="text-foreground">{rating.toFixed(1)}</span>
          {reviewCount && (
            <span className="text-muted-foreground">
              ({reviewCount} {reviewCount === 1 ? 'recensione' : 'recensioni'})
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default RatingStars;
