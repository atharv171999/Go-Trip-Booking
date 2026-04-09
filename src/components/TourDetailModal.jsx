'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle, Clock, Users, Coffee, MapPin } from 'lucide-react';
import BookingForm from './BookingForm';

const TourDetailModal = ({ tour, onClose }) => {
  if (!tour) return null;

  const inclusions = [
    'Premium Accommodations',
    'Guided Sightseeing Tours',
    'Daily Breakfast & Dinner',
    'Private Airport Transfers',
    'Entrance Fees to Main Attractions',
    '24/7 Concierge Support'
  ];

  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <Image 
            src={tour.imageUrl} 
            alt={tour.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12 hidden md:block">
            <h2 className="text-white text-3xl font-black mb-2 tracking-tight">
              {tour.name} Exclusive
            </h2>
            <div className="flex items-center gap-4 text-white/90 text-sm font-semibold">
              <span className="flex items-center gap-1.5"><Clock size={16} /> 6 Days / 5 Nights</span>
              <span className="flex items-center gap-1.5"><Users size={16} /> Group of 8-12</span>
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 overflow-y-auto">
          {!isBooking ? (
            <div className="animate-in slide-in-from-left-8 duration-500">
              <div className="mb-8">
                <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
                  Tour Package Detail
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 tracking-tight">
                  {tour.name} Discovery Tour
                </h1>
                <div className="flex items-center gap-2 text-zinc-500 font-medium mb-6">
                  <MapPin size={18} className="text-purple-600" />
                  <span>Full Experience Itinerary</span>
                </div>
                <p className="text-zinc-500 leading-relaxed text-lg">
                  Unlock the secrets of {tour.name} with our masterfully crafted tour. From iconic landmarks to hidden local spots, we&apos;ve designed every moment to be unforgettable.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="text-zinc-400 text-xs font-bold uppercase block mb-1">Stay</span>
                  <span className="text-zinc-900 font-bold flex items-center gap-2"><Coffee size={18} className="text-purple-600" /> 5-Star Hotel</span>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="text-zinc-400 text-xs font-bold uppercase block mb-1">Meal Plan</span>
                  <span className="text-zinc-900 font-bold">Full Board</span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="mb-12">
                <h3 className="text-zinc-900 font-black text-xl mb-6 tracking-tight">What&apos;s Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {inclusions.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-zinc-600 font-medium">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-zinc-400 text-sm font-medium block">Starting Price</span>
                  <span className="text-3xl font-black text-zinc-900 tracking-tight">₹ {tour.price.toLocaleString('en-IN')}</span>
                </div>
                <button 
                  onClick={() => setIsBooking(true)}
                  className="w-full sm:w-auto bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all active:scale-95 shadow-xl shadow-purple-100"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          ) : (
            <BookingForm 
              tourName={tour.name} 
              onBack={() => setIsBooking(false)} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TourDetailModal;
