import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoutButton from './LogoutButton';
import HomeIcon from '../components/Home.png';
import LifemapIcon from '../components/Chatbot.png';
import ConsultIcon from '../components/Consulting.png';
import LifeCarterIcon from '../components/HeartRate.png';

export default function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || 'User');
      } catch {
        setUserName('User');
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-red-600">KitaFit</Link>

      <div className="space-x-4 text-sm flex items-center">
        {isLoggedIn && (
          <>
            <Link to="/" className={`flex items-center space-x-2 ${location.pathname === '/' ? 'text-red-600 font-bold' : ''}`}>
              <img src={HomeIcon} alt="Home" className="w-5 h-5" />
              <span>Home</span>
            </Link>

            <Link to="/maps" className={`flex items-center space-x-2 ${location.pathname === '/maps' ? 'text-red-600 font-bold' : ''}`}>
              <img src={LifemapIcon} alt="LifeMap" className="w-5 h-5" />
              <span>LifeMap</span>
            </Link>

            <Link to="/doctors" className={`flex items-center space-x-2 ${location.pathname === '/doctors' ? 'text-red-600 font-bold' : ''}`}>
              <img src={ConsultIcon} alt="Consult" className="w-5 h-5" />
              <span>Consult</span>
            </Link>
          </>
        )}

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-sm text-blue-500">Login</Link>
            <Link to="/register" className="text-sm text-blue-500">Register</Link>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Hi, {userName}</span>
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
}
