import { SocialPreview as SocialPreviewComponent } from "@/components/SocialPreview";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialPreview = () => {
  return (
    <>
      <SEOHead 
        title="Anteprima Social Media - Giolab"
        description="Testa come appariranno i link condivisi su Facebook, Twitter e LinkedIn"
        ogImage="https://giolabriparazioni.it/og-image-giolab.jpg"
      />
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
