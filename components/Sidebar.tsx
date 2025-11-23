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
    <div className="w-64 glass-dark text-white min-h-screen p-6 flex flex-col relative overflow-hidden border-r border-white/10">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
            <Home className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white neon-white">
              Billing Admin
            </h1>
          </div>
        </div>
        <p className="text-gray-400 text-sm font-light">WhatsApp Billing System</p>
      </div>

      <nav className="flex-1 relative z-10">
        <button
          onClick={() => router.push('/')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
            pathname === '/'
              ? 'bg-white text-black shadow-lg shadow-white/20 transform scale-105 font-semibold'
              : 'text-gray-300 hover:bg-white/10 hover:scale-105 backdrop-blur-sm border border-white/5'
          }`}
        >
          <Home size={20} />
          <span className="font-medium">Dashboard</span>
        </button>
      </nav>

      <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/5"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

