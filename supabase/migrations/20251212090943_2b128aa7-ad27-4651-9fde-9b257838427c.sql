-- Block all INSERT/UPDATE/DELETE on admin_users via API
-- Admin users should only be managed via database migrations with service role

CREATE POLICY "Block insert admin_users" 
ON public.admin_users 
FOR INSERT 
TO authenticated
WITH CHECK (false);

CREATE POLICY "Block update admin_users" 
ON public.admin_users 
FOR UPDATE 
TO authenticated
USING (false);

CREATE POLICY "Block delete admin_users" 
ON public.admin_users 
FOR DELETE 
TO authenticated
USING (false);