import { Facebook, Twitter, Linkedin, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

const SocialShare = ({ url, title, description }: SocialShareProps) => {
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  };

  const handleShare = (platform: string, shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    toast.success(`Apertura condivisione su ${platform}...`);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Link copiato negli appunti!");
    } catch (err) {
      toast.error("Impossibile copiare il link");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-giolab-blue/5 to-giolab-blue-light/5 rounded-xl border-2 border-giolab-blue/10">
      <div className="flex items-center gap-2 text-foreground">
        <Share2 className="h-5 w-5 text-giolab-blue" />
        <h3 className="font-semibold text-lg">Condividi questo articolo</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => handleShare("WhatsApp", shareLinks.whatsapp)}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>

        <Button
          onClick={() => handleShare("Facebook", shareLinks.facebook)}
          className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1664D9] text-white"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>

        <Button
          onClick={() => handleShare("Twitter", shareLinks.twitter)}
          className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>

        <Button
          onClick={() => handleShare("LinkedIn", shareLinks.linkedin)}
          className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#095196] text-white"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>

        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="flex items-center gap-2 border-2 hover:border-giolab-blue hover:text-giolab-blue"
        >
          <Share2 className="h-4 w-4" />
          Copia Link
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
