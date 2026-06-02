CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  thumbnail TEXT,
  presentation_url TEXT,
  report_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.case_studies TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.case_studies TO authenticated;
GRANT ALL ON public.case_studies TO service_role;

ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Case studies are publicly viewable"
ON public.case_studies FOR SELECT
USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.case_studies (title, description, tags, presentation_url, report_url, featured, sort_order) VALUES
('MeetCraft', 'Structured networking platform that turns chaotic events into 3x more meaningful follow-ups via intent matching and AI-drafted recaps.', ARRAY['Product Discovery','MVP','User Research'], NULL, NULL, true, 1),
('Global Makhana', 'Farm-to-pack premium makhana brand built around traceable sourcing, in-house grading, and B2B marketplace distribution.', ARRAY['Entrepreneurship','GTM','Supply Chain'], '/presentations/global-makhana.pptx', NULL, false, 2),
('MailNiti', 'GTM strategy for an AI email automation tool built for Bharat — INR pricing, regional language fluency, SME-tuned templates.', ARRAY['Go-To-Market','Positioning','Market Analysis'], NULL, NULL, false, 3),
('Passenger Journey Transformation', 'Airline Passenger 360° platform unifying booking, loyalty, and ops data to power proactive disruption comms and faster recovery.', ARRAY['Platform Thinking','Digital Transformation'], NULL, NULL, false, 4);
