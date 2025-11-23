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
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Calendar size={20} />
          Monthly Bill History
        </h3>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Download size={16} />
          Export CSV
        </button>
      </div>

      <div className="space-y-3">
        {apartment.billHistory.length === 0 ? (
          <p className="text-gray-500 text-sm">No bill history available</p>
        ) : (
          apartment.billHistory.map((entry, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                entry.isPaid
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">
                    {new Date(entry.month + '-01').toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  {entry.isPaid ? (
                    <CheckCircle className="text-green-600" size={18} />
                  ) : (
                    <XCircle className="text-red-600" size={18} />
                  )}
                </div>
                <span
                  className={`font-bold ${
                    entry.isPaid ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  ₹{entry.bills.total.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-2">
                <div>Water: ₹{entry.bills.water}</div>
                <div>Electricity: ₹{entry.bills.electricity}</div>
                <div>Gas: ₹{entry.bills.gas}</div>
              </div>
              {entry.paidDate && (
                <div className="text-xs text-gray-500">
                  Paid on: {new Date(entry.paidDate).toLocaleDateString()}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

