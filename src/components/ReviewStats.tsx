import { Star } from "lucide-react";
import { getReviewStats } from "@/data/reviews";

const ReviewStats = () => {
  const stats = getReviewStats();
  const totalStars = 5;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-muted-foreground">
            Recensioni verificate da clienti reali
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Average Rating */}
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">
              {stats.averageRating}
            </div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(totalStars)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(parseFloat(stats.averageRating))
                      ? "fill-primary text-primary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Rating Medio</p>
          </div>

          {/* Total Reviews */}
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">
              {stats.total}
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Recensioni Totali
            </p>
          </div>

          {/* Verified Reviews */}
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">
              {stats.verified}
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Recensioni Verificate
            </p>
          </div>
        </div>

        {/* Stars Distribution */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution];
            const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;

            return (
              <div key={rating} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-20">
                  <span className="text-sm font-medium text-foreground">
                    {rating}
                  </span>
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </div>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground w-12 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            📍 Giolab - Via Carmine 20, Assemini (Cagliari)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
