'use client';

import { Apartment } from '@/types';
import { Calendar, CheckCircle, XCircle, Download } from 'lucide-react';
import { useState } from 'react';

interface BillHistoryProps {
  apartment: Apartment;
}

export default function BillHistory({ apartment }: BillHistoryProps) {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const exportToCSV = () => {
    const csvContent = [
      ['Month', 'Water', 'Electricity', 'Gas', 'Total', 'Status', 'Paid Date'],
      ...apartment.billHistory.map((entry) => [
        entry.month,
        entry.bills.water.toString(),
        entry.bills.electricity.toString(),
        entry.bills.gas.toString(),
        entry.bills.total.toString(),
        entry.isPaid ? 'Paid' : 'Unpaid',
        entry.paidDate || 'N/A',
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flat-${apartment.flatNumber}-bill-history.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 neon-white">
          <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
            <Calendar className="text-white" size={20} />
          </div>
          <div className="w-1 h-6 bg-white rounded-full"></div>
          Monthly Bill History
        </h3>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl hover:bg-white/90 transition-all duration-300 text-sm font-semibold shadow-lg shadow-white/20 hover:scale-105"
        >
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="space-y-3">
        {apartment.billHistory.length === 0 ? (
          <p className="text-white/70 text-sm text-center py-4">No bill history available</p>
        ) : (
          apartment.billHistory.map((entry, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                entry.isPaid
                  ? 'bg-green-500/10 border-green-500/30 hover:border-green-400/50'
                  : 'bg-red-500/10 border-red-500/30 hover:border-red-400/50'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">
                    {new Date(entry.month + '-01').toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  {entry.isPaid ? (
                    <CheckCircle className="text-green-400" size={20} />
                  ) : (
                    <XCircle className="text-red-400" size={20} />
                  )}
                </div>
                <span className={`text-2xl font-bold ${
                  entry.isPaid ? 'text-green-400' : 'text-red-400'
                }`}>
                  ₹{entry.bills.total.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm text-white/80 mb-2">
                <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">💧 ₹{entry.bills.water}</div>
                <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">⚡ ₹{entry.bills.electricity}</div>
                <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">🔥 ₹{entry.bills.gas}</div>
              </div>
              {entry.paidDate && (
                <div className="text-xs text-white/60 mt-2">
                  ✓ Paid on: {new Date(entry.paidDate).toLocaleDateString()}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

