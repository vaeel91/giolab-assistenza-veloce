import { SocialPreview as SocialPreviewComponent } from "@/components/SocialPreview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialPreview = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <SocialPreviewComponent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SocialPreview;
