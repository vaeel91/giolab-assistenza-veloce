import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText, HelpCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Il nome deve contenere almeno 2 caratteri")
    .max(100, "Il nome è troppo lungo")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Il nome può contenere solo lettere, spazi, apostrofi e trattini"),
  phone: z.string()
    .trim()
    .optional()
    .refine(
      (val) => !val || /^[\d\s+()-]{8,20}$/.test(val),
      "Formato telefono non valido (es. 340 1234567)"
    ),
  deviceType: z.string().min(1, "Seleziona il tipo di dispositivo"),
  brand: z.string().min(1, "Seleziona la marca"),
  model: z.string().min(1, "Seleziona il modello"),
  service: z.string().min(1, "Seleziona il servizio richiesto"),
  message: z.string()
    .trim()
    .min(10, "Descrivi il problema (minimo 10 caratteri)")
    .max(1000, "Il messaggio è troppo lungo")
    .refine(
      (val) => !/[<>{}\\]/g.test(val),
      "Il messaggio contiene caratteri non permessi"
    ),
});

type FormData = z.infer<typeof formSchema>;

const deviceTypes = [
  "Cellulare",
  "PC",
  "Console",
  "Tablet",
  "Altro",
];

const brands: Record<string, string[]> = {
  "Cellulare": ["Apple", "Samsung", "Huawei", "Xiaomi", "Oppo", "OnePlus", "Google Pixel", "Motorola", "Nokia", "Altro"],
  "PC": ["Apple (MacBook)", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Microsoft Surface", "Altro"],
  "Console": ["PlayStation", "Xbox", "Nintendo", "Altro"],
  "Tablet": ["Apple (iPad)", "Samsung", "Huawei", "Lenovo", "Amazon", "Altro"],
  "Altro": ["Specifica nel messaggio"],
};

const models: Record<string, string[]> = {
  "Apple": ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone SE (3a gen)", "iPhone SE (2a gen)", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s", "Apple Watch Ultra 2", "Apple Watch Series 9", "Apple Watch Series 8", "Apple Watch SE (2a gen)", "Apple Watch Series 7", "Apple Watch Series 6", "Apple Watch SE (1a gen)", "Apple Watch Series 5", "Apple Watch Series 4", "Apple Watch Series 3", "Altro modello"],
  "Samsung": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy A54", "Galaxy A53", "Galaxy A52", "Galaxy A34", "Galaxy A33", "Galaxy A14", "Galaxy A13", "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Altro modello"],
  "Huawei": ["P60 Pro", "P50 Pro", "P40 Pro", "P30 Pro", "Mate 60 Pro", "Mate 50 Pro", "Mate 40 Pro", "Mate 30 Pro", "Nova 11", "Nova 10", "Nova 9", "Y9", "Y7", "Altro modello"],
  "Xiaomi": ["14 Ultra", "14 Pro", "14", "13 Ultra", "13 Pro", "13", "12 Pro", "12", "11 Ultra", "11 Pro", "11", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 11", "Poco X6 Pro", "Poco X6", "Poco F5", "Altro modello"],
  "Oppo": ["Find X6 Pro", "Find X5 Pro", "Reno 10 Pro", "Reno 9 Pro", "A98", "A78", "Altro modello"],
  "OnePlus": ["11 Pro", "11", "10 Pro", "10T", "9 Pro", "9", "Nord 3", "Nord 2", "Altro modello"],
  "Google Pixel": ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7", "Pixel 6 Pro", "Pixel 6", "Altro modello"],
  "Motorola": ["Edge 40 Pro", "Edge 30", "Moto G", "Altro modello"],
  "Nokia": ["G60", "G50", "X30", "Altro modello"],
  "Apple (MacBook)": ["MacBook Pro 16\" (M3)", "MacBook Pro 14\" (M3)", "MacBook Pro 16\" (M2)", "MacBook Pro 14\" (M2)", "MacBook Pro 13\" (M2)", "MacBook Air 15\" (M3)", "MacBook Air 13\" (M3)", "MacBook Air 15\" (M2)", "MacBook Air 13\" (M2)", "MacBook Air (M1)", "MacBook Pro 16\" (Intel)", "MacBook Pro 13\" (Intel)", "Altro modello"],
  "Dell": ["XPS 15", "XPS 13", "Inspiron 15", "Inspiron 14", "Latitude", "Altro modello"],
  "HP": ["Pavilion 15", "Pavilion 14", "Envy 15", "Envy 13", "EliteBook", "ProBook", "Altro modello"],
  "Lenovo": ["ThinkPad X1", "ThinkPad T Series", "ThinkPad E Series", "IdeaPad 5", "IdeaPad 3", "Yoga", "Tab P11 Pro", "Tab M10", "Tab M8", "Altro modello"],
  "Asus": ["ZenBook 14", "ZenBook 13", "VivoBook 15", "VivoBook 14", "ROG", "TUF Gaming", "Altro modello"],
  "Acer": ["Aspire 5", "Aspire 3", "Swift 3", "Swift 1", "Predator", "Altro modello"],
  "MSI": ["Prestige 14", "Modern 15", "GF Series", "GE Series", "Altro modello"],
  "Microsoft Surface": ["Surface Laptop 5", "Surface Laptop 4", "Surface Pro 9", "Surface Pro 8", "Surface Go", "Altro modello"],
  "PlayStation": ["PlayStation 5", "PlayStation 5 Digital", "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4"],
  "Xbox": ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One"],
  "Nintendo": ["Nintendo Switch OLED", "Nintendo Switch", "Nintendo Switch Lite"],
  "Apple (iPad)": ["iPad Pro 12.9\" (6a gen)", "iPad Pro 11\" (4a gen)", "iPad Air (5a gen)", "iPad Air (4a gen)", "iPad (10a gen)", "iPad (9a gen)", "iPad Mini (6a gen)", "Altro modello"],
  "Amazon": ["Fire HD 10", "Fire HD 8", "Fire 7", "Altro modello"],
  "Altro": ["Specifica nel messaggio"],
};

const services: Record<string, string[]> = {
  "Cellulare": [
    "Riparazione Display",
    "Sostituzione Batteria",
    "Batteria Maggiorata (iPhone)",
    "Riparazione Fotocamera",
    "Sostituzione Vetro Posteriore",
    "Rigenerazione Vetro (iPhone)",
    "Riparazione Porta di Ricarica",
    "Sostituzione Altoparlante/Microfono",
    "Riparazione Tasti Volume/Accensione",
    "Recupero Dati",
    "Micro-saldature",
    "Riparazione Danni da Liquidi",
    "Pulizia Interna",
    "Sostituzione Scocca",
    "Protezione Schermo",
    "Configurazione e Trasferimento Dati",
    "Diagnosi e Preventivo",
    "Altro",
  ],
  "PC": [
    "Riparazione Hardware",
    "Upgrade SSD",
    "Upgrade RAM",
    "Sostituzione Display",
    "Sostituzione Batteria Notebook",
    "Riparazione Tastiera",
    "Sostituzione Ventola/Dissipatore",
    "Pulizia Interna e Pasta Termica",
    "Riparazione Cerniere",
    "Riparazione Porta USB/HDMI",
    "Recupero Dati",
    "Installazione Sistema Operativo",
    "Rimozione Virus/Malware",
    "Ottimizzazione Prestazioni",
    "Micro-saldature Scheda Madre",
    "Riparazione Danni da Liquidi",
    "Configurazione e Trasferimento Dati",
    "Diagnosi e Preventivo",
    "Altro",
  ],
  "Console": [
    "Riparazione Lettore Dischi",
    "Sostituzione Porta HDMI",
    "Sostituzione Porta USB",
    "Pulizia Interna e Pasta Termica",
    "Sostituzione Ventola",
    "Riparazione Surriscaldamento",
    "Riparazione Controller",
    "Riparazione Connettività Wi-Fi",
    "Micro-saldature Scheda Madre",
    "Riparazione Alimentazione",
    "Sostituzione Hard Disk/SSD",
    "Upgrade SSD",
    "Riparazione Display (Switch)",
    "Riparazione Danni da Liquidi",
    "Diagnosi e Preventivo",
    "Altro",
  ],
  "Tablet": [
    "Riparazione Display",
    "Sostituzione Batteria",
    "Riparazione Fotocamera",
    "Riparazione Vetro Posteriore",
    "Rigenerazione Vetro (iPad)",
    "Riparazione Porta di Ricarica",
    "Sostituzione Altoparlante",
    "Recupero Dati",
    "Micro-saldature",
    "Riparazione Danni da Liquidi",
    "Pulizia Interna",
    "Protezione Schermo",
    "Configurazione e Trasferimento Dati",
    "Diagnosi e Preventivo",
    "Altro",
  ],
  "Altro": [
    "Descrivi nel messaggio",
  ],
};

interface QuoteRequestDialogProps {
  children: React.ReactNode;
}

export const QuoteRequestDialog = ({ children }: QuoteRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  const whatsappNumber = "393406970686";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      deviceType: "",
      brand: "",
      model: "",
      service: "",
      message: "",
    },
  });

  const selectedDeviceType = form.watch("deviceType");
  const selectedBrand = form.watch("brand");

  const onSubmit = (data: FormData) => {
    const whatsappMessage = `🔧 *RICHIESTA PREVENTIVO*

👤 *Nome:* ${data.name}
${data.phone ? `📞 *Telefono:* ${data.phone}\n` : ""}
📱 *Tipo:* ${data.deviceType}
🏷️ *Marca:* ${data.brand}
📲 *Modello:* ${data.model}
⚙️ *Servizio:* ${data.service}

📝 *Descrizione:*
${data.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Usa location.href invece di window.open per evitare blocchi popup
    window.location.href = whatsappUrl;
    
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Richiedi un Preventivo</DialogTitle>
          <DialogDescription>
            Compila il form e ti contatteremo su WhatsApp per fornirti un preventivo gratuito
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input placeholder="Il tuo nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono (Necessario per ricontatto su Whatsapp)</FormLabel>
                  <FormControl>
                    <Input placeholder="340 123 4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo di Dispositivo *</FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue("brand", "");
                      form.setValue("model", "");
                      form.setValue("service", "");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona il tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {deviceTypes.map((device) => (
                        <SelectItem key={device} value={device}>
                          {device}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedDeviceType && brands[selectedDeviceType] && (
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca *</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("model", "");
                      }} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleziona la marca" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {brands[selectedDeviceType].map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {selectedBrand && models[selectedBrand] && (
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modello *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleziona il modello" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {models[selectedBrand].map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                      <HelpCircle className="h-4 w-4" />
                      <span>Non sei sicuro sul modello?</span>
                      <a 
                        href="/trova-modello-dispositivo" 
                        target="_blank"
                        className="text-primary hover:underline font-medium"
                      >
                        Scopri come trovarlo
                      </a>
                    </div>
                  </FormItem>
                )}
              />
            )}

            {selectedDeviceType && services[selectedDeviceType] && (
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Servizio Richiesto *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleziona il servizio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services[selectedDeviceType].map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrizione del Problema *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descrivi il problema o il servizio di cui hai bisogno..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg">
              Invia Richiesta su WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
