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
        group aspect-square rounded-2xl p-6 flex flex-col items-center justify-center
        transition-all duration-300 hover:scale-110 hover:rotate-1
        relative overflow-hidden border-2
        ${apartment.isPaid 
          ? 'bg-black border-green-500/50 glow-green hover:border-green-400' 
          : 'bg-black border-red-500/50 glow-red hover:border-red-400'
        }
        text-white font-semibold shadow-2xl
      `}
    >
      {/* Animated shine effect */}
      {apartment.isPaid ? (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      )}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '15px 15px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl font-bold mb-2 neon-white">{apartment.flatNumber}</div>
        <div className={`text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm border ${
          apartment.isPaid 
            ? 'bg-green-500/20 border-green-500/50 text-green-300' 
            : 'bg-red-500/20 border-red-500/50 text-red-300'
        }`}>
          {apartment.isPaid ? '✓ Paid' : '⚠ Unpaid'}
        </div>
        {apartment.alerts.length > 0 && (
          <div className="mt-3 text-xs bg-white/20 text-white px-3 py-1.5 rounded-full font-bold shadow-lg animate-pulse border border-white/30">
            {apartment.alerts.length} alert{apartment.alerts.length > 1 ? 's' : ''}
          </div>
        )}
      </div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 ${apartment.isPaid ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'} rounded-bl-full border-l border-b`}></div>
    </button>
  );
}

