-- Ensure the admin authorization helper exists (referenced by RLS policies)
-- Safe to run even if already present.
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE user_id = check_user_id
  );
$$;