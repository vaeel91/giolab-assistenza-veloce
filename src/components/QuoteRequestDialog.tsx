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
import { FileText } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Il nome deve contenere almeno 2 caratteri").max(100, "Il nome è troppo lungo"),
  phone: z.string().trim().optional(),
  deviceType: z.string().min(1, "Seleziona il tipo di dispositivo"),
  model: z.string().min(1, "Seleziona il modello"),
  service: z.string().min(1, "Seleziona il servizio richiesto"),
  message: z.string().trim().min(10, "Descrivi il problema (minimo 10 caratteri)").max(1000, "Il messaggio è troppo lungo"),
});

type FormData = z.infer<typeof formSchema>;

const deviceTypes = [
  "iPhone",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "Altri Smartphone",
  "PC Windows",
  "MacBook",
  "iPad",
  "Tablet Android",
  "PlayStation",
  "Xbox",
  "Nintendo Switch",
  "Altro",
];

const deviceModels: Record<string, string[]> = {
  "iPhone": ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone SE (3a gen)", "iPhone SE (2a gen)", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s", "Altro modello"],
  "Samsung": ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy A54", "Galaxy A53", "Galaxy A52", "Galaxy A34", "Galaxy A33", "Galaxy A14", "Galaxy A13", "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Altro modello"],
  "Huawei": ["P60 Pro", "P50 Pro", "P40 Pro", "P30 Pro", "Mate 60 Pro", "Mate 50 Pro", "Mate 40 Pro", "Mate 30 Pro", "Nova 11", "Nova 10", "Nova 9", "Y9", "Y7", "Altro modello"],
  "Xiaomi": ["14 Ultra", "14 Pro", "14", "13 Ultra", "13 Pro", "13", "12 Pro", "12", "11 Ultra", "11 Pro", "11", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 11", "Poco X6 Pro", "Poco X6", "Poco F5", "Altro modello"],
  "Altri Smartphone": ["Specifica nel messaggio"],
  "PC Windows": ["Dell XPS", "HP Pavilion", "HP Envy", "Lenovo ThinkPad", "Lenovo IdeaPad", "Asus ZenBook", "Asus VivoBook", "Acer Aspire", "MSI", "Surface Laptop", "Altro modello"],
  "MacBook": ["MacBook Pro 16\" (M3)", "MacBook Pro 14\" (M3)", "MacBook Pro 16\" (M2)", "MacBook Pro 14\" (M2)", "MacBook Pro 13\" (M2)", "MacBook Air 15\" (M3)", "MacBook Air 13\" (M3)", "MacBook Air 15\" (M2)", "MacBook Air 13\" (M2)", "MacBook Air (M1)", "MacBook Pro 16\" (Intel)", "MacBook Pro 13\" (Intel)", "Altro modello"],
  "iPad": ["iPad Pro 12.9\" (6a gen)", "iPad Pro 11\" (4a gen)", "iPad Air (5a gen)", "iPad Air (4a gen)", "iPad (10a gen)", "iPad (9a gen)", "iPad Mini (6a gen)", "Altro modello"],
  "Tablet Android": ["Samsung Galaxy Tab S9", "Samsung Galaxy Tab S8", "Samsung Galaxy Tab A", "Lenovo Tab", "Huawei MatePad", "Altro modello"],
  "PlayStation": ["PlayStation 5", "PlayStation 5 Digital", "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4"],
  "Xbox": ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One"],
  "Nintendo Switch": ["Nintendo Switch OLED", "Nintendo Switch", "Nintendo Switch Lite"],
  "Altro": ["Specifica nel messaggio"],
};

const services = [
  "Riparazione Display",
  "Sostituzione Batteria",
  "Riparazione Fotocamera",
  "Assistenza PC/Notebook",
  "Riparazione Console",
  "Batteria Maggiorata iPhone",
  "Recupero Dati",
  "Micro-saldature",
  "Sostituzione Vetro Posteriore iPhone",
  "Pulizia e Manutenzione",
  "Protezione Schermo",
  "Configurazione e Trasferimento Dati",
  "Diagnosi e Preventivo",
  "Altro",
];

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
      model: "",
      service: "",
      message: "",
    },
  });

  const selectedDeviceType = form.watch("deviceType");

  const onSubmit = (data: FormData) => {
    const whatsappMessage = `🔧 *RICHIESTA PREVENTIVO*

👤 *Nome:* ${data.name}
${data.phone ? `📞 *Telefono:* ${data.phone}\n` : ""}
📱 *Dispositivo:* ${data.deviceType}
📲 *Modello:* ${data.model}
⚙️ *Servizio:* ${data.service}

📝 *Descrizione:*
${data.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    
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
                  <FormLabel>Telefono (opzionale)</FormLabel>
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
                      form.setValue("model", "");
                    }} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona il dispositivo" />
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

            {selectedDeviceType && deviceModels[selectedDeviceType] && (
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
                        {deviceModels[selectedDeviceType].map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
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
                      {services.map((service) => (
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
