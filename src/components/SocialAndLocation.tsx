import Gallery from "./Gallery";
import Location from "./Location";

const SocialAndLocation = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <Gallery />
          <Location />
        </div>
      </div>
    </section>
  );
};

export default SocialAndLocation;
