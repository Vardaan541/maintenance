'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: 'all' | 'paid' | 'unpaid') => void;
}

export default function SearchBar({ onSearch, onFilterChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'paid' | 'unpaid'>('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (newFilter: 'all' | 'paid' | 'unpaid') => {
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 z-10" size={20} />
        <input
          type="text"
          placeholder="Search by flat number..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-4 glass rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-xl border border-white/10"
        />
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium border ${
            filter === 'all'
              ? 'bg-white text-black shadow-lg shadow-white/20 scale-105 border-white'
              : 'glass text-white/80 hover:bg-white/10 hover:scale-105 backdrop-blur-xl border-white/10'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange('paid')}
          className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium border ${
            filter === 'paid'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105 border-green-400'
              : 'glass text-white/80 hover:bg-green-500/20 hover:border-green-500/30 hover:scale-105 backdrop-blur-xl border-white/10'
          }`}
        >
          Paid
        </button>
        <button
          onClick={() => handleFilterChange('unpaid')}
          className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium border ${
            filter === 'unpaid'
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30 scale-105 border-red-400'
              : 'glass text-white/80 hover:bg-red-500/20 hover:border-red-500/30 hover:scale-105 backdrop-blur-xl border-white/10'
          }`}
        >
          Unpaid
        </button>
      </div>
    </div>
  );
}

