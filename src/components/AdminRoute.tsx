import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/", { replace: true });
        return;
      }

      const { data, error } = await supabase.rpc("is_admin", {
        check_user_id: session.user.id,
      });

      if (error || !data) {
        navigate("/", { replace: true });
        return;
      }

      setIsAdmin(true);
    };

    checkAdmin();
  }, [navigate]);

  if (isAdmin === null) return null;
  return <>{children}</>;
};

export default AdminRoute;
