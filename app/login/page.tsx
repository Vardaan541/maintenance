'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, Lock, User } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already logged in
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn')) {
      router.push('/');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - accept any credentials
    if (username && password) {
      // In a real app, this would be an API call
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="glass rounded-2xl shadow-2xl p-8 w-full max-w-md relative z-10 backdrop-blur-xl border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 border border-white/20 rounded-2xl mb-4 shadow-lg backdrop-blur-sm">
            <Lock className="text-white" size={36} />
          </div>
          <h1 className="text-4xl font-bold text-white neon-white mb-2">
            Admin Login
          </h1>
          <p className="text-white/80">WhatsApp Billing System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl text-sm backdrop-blur-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white text-black rounded-xl hover:bg-white/90 transition-all duration-300 font-semibold shadow-lg shadow-white/20 hover:shadow-xl hover:scale-105"
          >
            <LogIn size={20} />
            <span>Login</span>
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/60">
          <p>Mock login - any credentials will work</p>
        </div>
      </div>
    </div>
  );
}

