import { useAdminStore } from '../store/adminStore';
import AdminLogin from '../components/admin/AdminLogin';
import AdminPanel from '../components/admin/AdminPanel';

export default function Admin() {
  const isAuthenticated = useAdminStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminPanel />;
}
