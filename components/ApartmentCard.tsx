'use client';

import { Apartment } from '@/types';
import { useRouter } from 'next/navigation';

interface ApartmentCardProps {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/apartment/${apartment.id}`)}
      className={`
        aspect-square rounded-lg p-6 flex flex-col items-center justify-center
        transition-all duration-200 hover:scale-105 hover:shadow-lg
        ${apartment.isPaid ? 'bg-green-500' : 'bg-red-500'}
        text-white font-semibold
      `}
    >
      <div className="text-3xl font-bold mb-2">{apartment.flatNumber}</div>
      <div className="text-sm opacity-90">
        {apartment.isPaid ? 'Paid' : 'Unpaid'}
      </div>
      {apartment.alerts.length > 0 && (
        <div className="mt-2 text-xs bg-yellow-500 px-2 py-1 rounded">
          {apartment.alerts.length} alert{apartment.alerts.length > 1 ? 's' : ''}
        </div>
      )}
    </button>
  );
}

