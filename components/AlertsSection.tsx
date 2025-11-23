'use client';

import { AlertCircle } from 'lucide-react';

interface AlertsSectionProps {
  alerts: string[];
}

export default function AlertsSection({ alerts }: AlertsSectionProps) {
  if (alerts.length === 0) {
    return (
      <div className="bg-white/5 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
        <p className="text-white font-medium flex items-center gap-2">
          <span className="text-2xl">✓</span>
          <span>No alerts. All good!</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2 neon-white">
        <AlertCircle className="text-white animate-pulse" size={24} />
        <div className="w-1 h-6 bg-white rounded-full"></div>
        ALERTS
      </h3>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/20 rounded-xl p-4 flex items-start gap-3 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:border-white/40"
          >
            <AlertCircle className="text-white mt-0.5 flex-shrink-0" size={20} />
            <p className="text-white font-medium">{alert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

