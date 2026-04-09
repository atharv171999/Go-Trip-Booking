'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DestinationCard = ({ id, name, price, imageUrl, slug }) => {
  return (
    <Link 
      href={`/destinations?tour=${slug}`}
      scroll={false}
      className="group block w-full bg-white rounded-t-[2.5rem] overflow-hidden transition-all duration-300 shadow-sm"
    >
      {/* Card Image */}
      <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[2.5rem]">
        <Image 
          src={imageUrl} 
          alt={`${name} Tour Packages`} 
          fill
          className="object-cover transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="py-6 px-3 flex flex-col">
        <h3 className="text-xl font-bold text-zinc-900 transition-colors duration-300">
          {name} Tour Packages
        </h3>
        <p className="text-zinc-500 text-sm mt-1 font-medium italic">
          Starting from
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-2xl font-extrabold text-zinc-900">
            ₹ {price.toLocaleString('en-IN')}
          </p>
          <div className="bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-all">
            View Tour
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
