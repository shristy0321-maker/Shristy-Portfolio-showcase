ALTER TABLE public.case_studies ADD COLUMN badge TEXT;
UPDATE public.case_studies SET badge = 'Skillathon Winner' WHERE title = 'MeetCraft';
