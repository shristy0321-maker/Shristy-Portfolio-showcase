-- Add slug + detail fields to case_studies
ALTER TABLE public.case_studies
  ADD COLUMN IF NOT EXISTS slug TEXT,
  ADD COLUMN IF NOT EXISTS problem_statement TEXT,
  ADD COLUMN IF NOT EXISTS overview TEXT,
  ADD COLUMN IF NOT EXISTS user_research TEXT,
  ADD COLUMN IF NOT EXISTS key_insights TEXT,
  ADD COLUMN IF NOT EXISTS solution TEXT,
  ADD COLUMN IF NOT EXISTS impact TEXT;

UPDATE public.case_studies SET slug = 'meetcraft' WHERE title = 'MeetCraft';
UPDATE public.case_studies SET slug = 'global-makhana' WHERE title = 'Global Makhana';
UPDATE public.case_studies SET slug = 'mailniti' WHERE title = 'MailNiti';
UPDATE public.case_studies SET slug = 'passenger-journey' WHERE title = 'Passenger Journey Transformation';

ALTER TABLE public.case_studies ALTER COLUMN slug SET NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS case_studies_slug_idx ON public.case_studies(slug);

-- Roles system
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'user');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

-- Admin CRUD policies on case_studies
GRANT INSERT, UPDATE, DELETE ON public.case_studies TO authenticated;

CREATE POLICY "Admins can insert case studies"
ON public.case_studies FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update case studies"
ON public.case_studies FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete case studies"
ON public.case_studies FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Storage policies for case-study-assets bucket (bucket created via tool)
CREATE POLICY "Case study assets publicly readable"
ON storage.objects FOR SELECT
USING (bucket_id = 'case-study-assets');

CREATE POLICY "Admins can upload case study assets"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'case-study-assets' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update case study assets"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'case-study-assets' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete case study assets"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'case-study-assets' AND public.has_role(auth.uid(), 'admin'));