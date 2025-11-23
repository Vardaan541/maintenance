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
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
          
          <SearchBar onSearch={setSearchQuery} onFilterChange={setFilter} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredApartments.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500">
                No apartments found matching your criteria.
              </div>
            ) : (
              filteredApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))
            )}
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {mockApartments.length}
                </div>
                <div className="text-sm text-gray-600">Total Flats</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {mockApartments.filter((apt) => apt.isPaid).length}
                </div>
                <div className="text-sm text-gray-600">Paid</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {mockApartments.filter((apt) => !apt.isPaid).length}
                </div>
                <div className="text-sm text-gray-600">Unpaid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

