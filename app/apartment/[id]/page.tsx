'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import BillForm from '@/components/BillForm';
import AlertsSection from '@/components/AlertsSection';
import ContactSection from '@/components/ContactSection';
import BillHistory from '@/components/BillHistory';
import { mockApartments } from '@/data/mockData';
import { Apartment, Bill } from '@/types';
import { ArrowLeft, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function ApartmentDetail() {
  const router = useRouter();
  const params = useParams();
  const apartmentId = params.id as string;

  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const found = mockApartments.find((apt) => apt.id === apartmentId);
    if (found) {
      setApartment({ ...found });
    }
  }, [apartmentId]);

  if (!apartment) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-8 flex items-center justify-center relative">
          <div className="glass rounded-2xl p-8 text-center backdrop-blur-xl">
            <p className="text-white text-xl font-semibold">Apartment not found</p>
          </div>
        </div>
      </div>
    );
  }

  const handleBillsChange = (newBills: Bill) => {
    setApartment({
      ...apartment,
      bills: newBills,
    });
  };

  const handleSendBill = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/send-bill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apartmentId: apartment.id,
          flatNumber: apartment.flatNumber,
          tenantPhone: apartment.tenant.phone,
          bills: apartment.bills,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Bill sent to ${apartment.tenant.name} via WhatsApp!`);
      } else {
        alert('Failed to send bill. Please try again.');
      }
    } catch (error) {
      alert('Error sending bill. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSendReminder = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/send-reminder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apartmentId: apartment.id,
          flatNumber: apartment.flatNumber,
          tenantPhone: apartment.tenant.phone,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Reminder sent to ${apartment.tenant.name} via WhatsApp!`);
      } else {
        alert('Failed to send reminder. Please try again.');
      }
    } catch (error) {
      alert('Error sending reminder. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleMarkAsPaid = async () => {
    if (confirm('Mark this bill as paid?')) {
      setIsSaving(true);
      try {
        const response = await fetch('/api/mark-paid', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apartmentId: apartment.id,
            flatNumber: apartment.flatNumber,
          }),
        });
        const data = await response.json();
        if (data.success) {
          const currentDate = new Date().toISOString().split('T')[0];
          const currentMonth = new Date().toISOString().slice(0, 7);
          
          // Update current bill status
          setApartment({
            ...apartment,
            isPaid: true,
            alerts: [],
            billHistory: apartment.billHistory.map((entry) =>
              entry.month === currentMonth
                ? { ...entry, isPaid: true, paidDate: currentDate }
                : entry
            ),
          });
          
          alert('Bill marked as paid!');
        } else {
          alert('Failed to mark as paid. Please try again.');
        }
      } catch (error) {
        alert('Error marking as paid. Please try again.');
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-all duration-300 hover:scale-105 glass px-4 py-2 rounded-xl backdrop-blur-xl border border-white/10"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-5xl font-bold mb-3 text-white neon-white">
                  Flat {apartment.flatNumber}
                </h1>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full animate-pulse ${
                      apartment.isPaid 
                        ? 'bg-green-500 shadow-lg shadow-green-500/50' 
                        : 'bg-red-500 shadow-lg shadow-red-500/50'
                    }`}
                  />
                  <span className={`font-medium text-lg ${
                    apartment.isPaid ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {apartment.isPaid ? '✓ Paid' : '⚠ Unpaid'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Bills and Alerts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bills Form */}
              <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
                <BillForm bills={apartment.bills} onBillsChange={handleBillsChange} />
              </div>

              {/* Alerts */}
              <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
                <AlertsSection alerts={apartment.alerts} />
              </div>

              {/* Bill History */}
              <BillHistory apartment={apartment} />
            </div>

            {/* Right Column - Contact and Actions */}
            <div className="space-y-6">
              {/* Contact Section */}
              <ContactSection tenant={apartment.tenant} />

              {/* Action Buttons */}
              <div className="glass rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-3 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-white rounded-full"></div>
                  Actions
                </h3>
                
                <button
                  onClick={handleSendBill}
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white text-black rounded-xl hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-white/20 hover:shadow-xl hover:scale-105 font-semibold"
                >
                  <Send size={18} />
                  <span>Send Bill via WhatsApp</span>
                </button>

                <button
                  onClick={handleSendReminder}
                  disabled={isSaving || apartment.isPaid}
                  className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                >
                  <MessageSquare size={18} />
                  <span>Send Reminder</span>
                </button>

                <button
                  onClick={handleMarkAsPaid}
                  disabled={isSaving || apartment.isPaid}
                  className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                >
                  <CheckCircle size={18} />
                  <span>Mark as Paid</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

