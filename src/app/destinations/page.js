'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import DestinationCard from '@/components/DestinationCard';
import TourDetailModal from '@/components/TourDetailModal';
import { destinations } from '@/data/destinations';

function DestinationsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const tourSlug = searchParams.get('tour');
    if (tourSlug) {
      const tour = destinations.find(d => d.slug === tourSlug);
      setSelectedTour(tour || null);
    } else {
      setSelectedTour(null);
    }
  }, [searchParams]);

  const handleClose = () => {
    // Navigate back to /destinations without query params
    router.push('/destinations', { scroll: false });
  };

  return (
    <div className="bg-white min-h-screen px-6 py-12 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-20 mt-24 text-center flex flex-col items-center animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm mb-6">
          The World is Yours
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
          Curated Tours for the <br />
          <span className="text-purple-600 italic font-serif">Modern</span> Traveler.
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          Embark on extraordinary journeys across continents. From hidden mountain peaks 
          to serene coastal escapes, discover experiences that redefine your sense of wonder.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {destinations.map((dest) => (
          <DestinationCard 
            key={dest.id} 
            {...dest} 
          />
        ))}
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <TourDetailModal 
          tour={selectedTour} 
          onClose={handleClose} 
        />
      )}
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold animate-pulse text-zinc-300">Loading Destinations...</div>
      </div>
    }>
      <DestinationsContent />
    </Suspense>
  );
}
