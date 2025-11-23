'use client';

import { useState, useMemo } from 'react';
import Sidebar from '@/components/Sidebar';
import ApartmentCard from '@/components/ApartmentCard';
import SearchBar from '@/components/SearchBar';
import { mockApartments } from '@/data/mockData';
import { Apartment } from '@/types';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'paid' | 'unpaid'>('all');

  const filteredApartments = useMemo(() => {
    let filtered = mockApartments;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((apt) =>
        apt.flatNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filter === 'paid') {
      filtered = filtered.filter((apt) => apt.isPaid);
    } else if (filter === 'unpaid') {
      filtered = filtered.filter((apt) => !apt.isPaid);
    }

    return filtered;
  }, [searchQuery, filter]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-2 text-white neon-white">
              Dashboard
            </h1>
            <p className="text-gray-400 text-lg">Manage apartment bills and payments</p>
          </div>
          
          <SearchBar onSearch={setSearchQuery} onFilterChange={setFilter} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-8">
            {filteredApartments.length === 0 ? (
              <div className="col-span-full text-center py-12 glass rounded-2xl text-white border border-white/10">
                <p className="text-lg">No apartments found matching your criteria.</p>
              </div>
            ) : (
              filteredApartments.map((apartment, index) => (
                <div
                  key={apartment.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ApartmentCard apartment={apartment} />
                </div>
              ))
            )}
          </div>

          <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-1 neon-white">
                  {mockApartments.length}
                </div>
                <div className="text-sm text-gray-300 font-medium">Total Flats</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-1 neon-white">
                  {mockApartments.filter((apt) => apt.isPaid).length}
                </div>
                <div className="text-sm text-gray-300 font-medium">Paid</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white mb-1 neon-white">
                  {mockApartments.filter((apt) => !apt.isPaid).length}
                </div>
                <div className="text-sm text-gray-300 font-medium">Unpaid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

