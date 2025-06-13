import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 text-sm text-red-500 hover:underline"
    >
      Logout
    </button>
  );
}
