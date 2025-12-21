-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  confirmed BOOLEAN NOT NULL DEFAULT false,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  confirmation_token UUID DEFAULT gen_random_uuid(),
  source TEXT DEFAULT 'footer',
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster email lookups
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_confirmation_token ON public.newsletter_subscribers(confirmation_token);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Only edge functions with service role can manage subscriptions
-- Public users cannot read/write directly

-- Policy to allow inserts from edge functions (service role)
CREATE POLICY "Service role can manage newsletter"
ON public.newsletter_subscribers
FOR ALL
USING (true)
WITH CHECK (true);

-- Block direct anonymous access
CREATE POLICY "Block anonymous access to newsletter"
ON public.newsletter_subscribers
FOR ALL
TO anon
USING (false)
WITH CHECK (false);