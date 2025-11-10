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
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const whatsappMessage = `🔧 *RICHIESTA PREVENTIVO*

👤 *Nome:* ${data.name}
${data.phone ? `📞 *Telefono:* ${data.phone}\n` : ""}
📱 *Dispositivo:* ${data.deviceType}
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
