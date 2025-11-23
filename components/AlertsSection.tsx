'use client';

import { AlertCircle } from 'lucide-react';

interface AlertsSectionProps {
  alerts: string[];
}

export default function AlertsSection({ alerts }: AlertsSectionProps) {
  if (alerts.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 text-sm">No alerts. All good!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <AlertCircle className="text-red-500" size={20} />
        ALERTS
      </h3>
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2"
          >
            <AlertCircle className="text-red-500 mt-0.5" size={16} />
            <p className="text-red-800 text-sm">{alert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

