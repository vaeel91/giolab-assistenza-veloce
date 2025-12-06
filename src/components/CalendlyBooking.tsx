import { InlineWidget } from 'react-calendly';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '@/config/businessInfo';

// URL Calendly - configurabile in businessInfo.ts
const CALENDLY_URL = (BUSINESS_INFO as any).calendly?.url || 'https://calendly.com/giolabassemini/riparazione';

interface CalendlyBookingProps {
  mode?: 'popup' | 'inline';
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost';
  buttonSize?: 'default' | 'sm' | 'lg';
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

const CalendlyBooking = ({
  mode = 'popup',
  buttonText = 'Prenota Appuntamento',
  buttonVariant = 'default',
  buttonSize = 'default',
  className = '',
  prefill,
}: CalendlyBookingProps) => {
  const pageSettings = {
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '1e40af', // GioLab blue
    textColor: '1f2937',
  };

  const prefillData = prefill ? {
    name: prefill.name || '',
    email: prefill.email || '',
    customAnswers: prefill.customAnswers || {},
  } : undefined;

  if (mode === 'inline') {
    return (
      <div className={`calendly-inline-container ${className}`}>
        <InlineWidget
          url={CALENDLY_URL}
          pageSettings={pageSettings}
          prefill={prefillData}
          styles={{
            height: '700px',
            width: '100%',
          }}
        />
      </div>
    );
  }

  // Popup mode
  return (
    <Button
      variant={buttonVariant}
      size={buttonSize}
      className={`gap-2 ${className}`}
      onClick={() => {
        // Open Calendly in popup
        if (typeof window !== 'undefined' && (window as any).Calendly) {
          (window as any).Calendly.initPopupWidget({
            url: CALENDLY_URL,
            pageSettings,
            prefill: prefillData,
          });
        } else {
          // Fallback: open in new tab
          window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <Calendar className="h-4 w-4" />
      {buttonText}
    </Button>
  );
};
export default CalendlyBooking;
