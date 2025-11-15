import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogArticles } from "@/data/blogArticles";
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface PreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

const pages: Record<string, PreviewData> = {
  homepage: {
    title: "Giolab Assemini | Riparazione iPhone, Smartphone, PC e Console",
    description: "Centro assistenza specializzato ad Assemini (CA). Riparazione smartphone, PC e console con garanzia 12 mesi. Riparazioni rapide anche in 1 ora. Preventivo gratuito.",
    image: "https://giolabriparazioni.it/og-image-giolab.jpg",
    url: "https://giolabriparazioni.it"
  },
  servizi: {
    title: "Servizi di Riparazione - Giolab Assemini",
    description: "Tutti i nostri servizi di riparazione: iPhone, smartphone, PC, console. Assistenza specializzata con garanzia 12 mesi ad Assemini.",
    image: "https://giolabriparazioni.it/og-image-giolab.jpg",
    url: "https://giolabriparazioni.it/servizi"
  },
  blog: {
    title: "Blog Riparazioni e Guide Tecniche - Giolab",
    description: "Guide, consigli e approfondimenti sulle riparazioni di smartphone, iPhone, PC e console. Articoli tecnici dal centro assistenza Giolab di Assemini.",
    image: "https://giolabriparazioni.it/og-image-giolab.jpg",
    url: "https://giolabriparazioni.it/blog"
  }
};

// Add blog articles to pages
blogArticles.forEach(article => {
  let imageUrl = "https://giolabriparazioni.it/og-image-giolab.jpg"; // default fallback
  
  // Handle different image types
  if (typeof article.image === 'string') {
    if (article.image.startsWith('/og-images/') || article.image.startsWith('/')) {
      // Absolute path - add cache busting parameter
      const cacheBuster = `?v=${Date.now()}`;
      imageUrl = `https://giolabriparazioni.it${article.image}${cacheBuster}`;
    } else if (article.image.startsWith('http')) {
      // Full URL
      imageUrl = article.image;
    }
    // Skip emoji strings - use default fallback
  } else {
    // Imported image - use the import directly (Vite resolves this)
    imageUrl = article.image as string;
  }
  
  pages[`blog-${article.slug}`] = {
    title: article.title,
    description: article.description,
    image: imageUrl,
    url: `https://giolabriparazioni.it/blog/${article.slug}`
  };
});

export const SocialPreview = () => {
  const [selectedPage, setSelectedPage] = useState<string>("homepage");
  const currentData = pages[selectedPage];

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            Anteprima Condivisione Social Media
          </CardTitle>
          <p className="text-muted-foreground">
            Visualizza come appariranno i link del tuo sito quando condivisi sui social media
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Page Selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Seleziona Pagina/Articolo</label>
            <Select value={selectedPage} onValueChange={setSelectedPage}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homepage">🏠 Homepage</SelectItem>
                <SelectItem value="servizi">⚙️ Servizi</SelectItem>
                <SelectItem value="blog">📝 Blog Index</SelectItem>
                {blogArticles.map(article => (
                  <SelectItem key={article.slug} value={`blog-${article.slug}`}>
                    📄 {article.title.length > 50 ? `${article.title.substring(0, 50)}...` : article.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Social Media Tabs */}
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="facebook" className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Facebook
              </TabsTrigger>
              <TabsTrigger value="twitter" className="flex items-center gap-2">
                <Twitter className="w-4 h-4" />
                Twitter/X
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </TabsTrigger>
            </TabsList>

            {/* Facebook Preview */}
            <TabsContent value="facebook" className="mt-6">
              <div className="border rounded-lg overflow-hidden bg-white max-w-[500px] mx-auto shadow-sm">
                <div className="p-3 border-b bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">Giolab Assemini</p>
                      <p className="text-xs text-gray-500">Adesso</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Scopri di più sul nostro sito! 🔧
                  </p>
                </div>
                <img 
                  src={currentData.image} 
                  alt={currentData.title}
                  className="w-full aspect-[1.91/1] object-cover bg-gray-100"
                  onError={(e) => {
                    e.currentTarget.src = '/og-image-giolab.jpg';
                  }}
                />
                <div className="p-3 bg-gray-50 border-t">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {new URL(currentData.url).hostname}
                  </p>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                    {currentData.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {currentData.description}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Twitter/X Preview */}
            <TabsContent value="twitter" className="mt-6">
              <div className="border rounded-2xl overflow-hidden bg-white max-w-[500px] mx-auto shadow-sm">
                <div className="p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      G
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-sm text-gray-900">Giolab Assemini</span>
                        <span className="text-gray-500 text-sm">@giolab_assemini</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 text-sm">Adesso</span>
                      </div>
                      <p className="text-sm text-gray-900 mt-1">
                        Scopri di più 👇
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-2xl overflow-hidden mx-3 mb-3">
                  <img 
                    src={currentData.image} 
                    alt={currentData.title}
                    className="w-full aspect-[2/1] object-cover bg-gray-100"
                    onError={(e) => {
                      e.currentTarget.src = '/og-image-giolab.jpg';
                    }}
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 mb-1">
                      {currentData.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                      {currentData.description}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      🔗 {new URL(currentData.url).hostname}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* LinkedIn Preview */}
            <TabsContent value="linkedin" className="mt-6">
              <div className="border rounded-lg overflow-hidden bg-white max-w-[550px] mx-auto shadow-sm">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">Giolab Assemini</p>
                      <p className="text-xs text-gray-500">Centro Assistenza Smartphone e PC</p>
                      <p className="text-xs text-gray-500">Adesso · 🌐</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Scopri di più sui nostri servizi professionali 🔧
                  </p>
                </div>
                <img 
                  src={currentData.image} 
                  alt={currentData.title}
                  className="w-full aspect-[1.91/1] object-cover bg-gray-100"
                  onError={(e) => {
                    e.currentTarget.src = '/og-image-giolab.jpg';
                  }}
                />
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 text-base line-clamp-2 mb-2">
                    {currentData.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {new URL(currentData.url).hostname}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Debug Info */}
          <div className="mt-8 p-4 bg-muted rounded-lg text-xs space-y-1">
            <p><strong>URL:</strong> {currentData.url}</p>
            <p><strong>Immagine OG:</strong> {currentData.image}</p>
            <p><strong>Dimensioni consigliate:</strong> 1200x630px (ratio 1.91:1)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
