'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Home, LogOut, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock login state

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Billing Admin</h1>
        <p className="text-gray-400 text-sm">WhatsApp Billing System</p>
      </div>

      <nav className="flex-1">
        <button
          onClick={() => router.push('/')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
            pathname === '/'
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </button>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

