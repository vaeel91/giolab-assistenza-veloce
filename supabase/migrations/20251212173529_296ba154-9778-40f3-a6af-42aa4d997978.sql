-- Block anonymous users from reading admin_users table
CREATE POLICY "Block anonymous read admin_users"
ON public.admin_users
FOR SELECT
TO anon
USING (false);