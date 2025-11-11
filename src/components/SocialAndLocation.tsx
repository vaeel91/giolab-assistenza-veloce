import Gallery from "./Gallery";
import Location from "./Location";

const SocialAndLocation = () => {
  return (
    <section className="py-4 md:py-6 bg-muted/30 h-full flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 max-w-7xl mx-auto">
          <Gallery />
          <Location />
        </div>
      </div>
    </section>
  );
};

export default SocialAndLocation;
