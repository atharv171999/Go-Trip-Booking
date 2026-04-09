import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-16 mt-10 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Support Policies
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Refund & Cancellation
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-8" />
        <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
          At GoTripBooking, we strive to be transparent and fair in our booking practices. 
          Please review our standard policies for cancellations, modifications, and refunds.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Cancellation Tiers */}
        <section>
          <div className="bg-zinc-900 text-white p-10 md:p-16 rounded-[3rem] shadow-xl">
            <h2 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">Standard Cancellation Fees</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-zinc-800/50 p-6 rounded-2xl">
                <span className="text-zinc-400 font-medium">60+ Days before travel</span>
                <span className="text-purple-400 font-black">10% Retention</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-800/50 p-6 rounded-2xl">
                <span className="text-zinc-400 font-medium">30 - 60 Days before travel</span>
                <span className="text-purple-400 font-black">50% Retention</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-800/50 p-6 rounded-2xl">
                <span className="text-zinc-400 font-medium">Less than 30 Days before travel</span>
                <span className="text-purple-400 font-black">100% Retention</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Provisions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-purple-50 rounded-[2.5rem] border border-purple-100">
            <h3 className="text-xl font-black text-zinc-900 mb-4 uppercase tracking-tight">Modifications</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Requests to change dates, destinations, or participant counts are subject to availability and supplier approval.
            </p>
            <div className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-white p-4 rounded-2xl border border-purple-200">
              Fee: Lower of 10% or ₹ 20,000 + Price Difference
            </div>
          </div>

          <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
            <h3 className="text-xl font-black text-zinc-900 mb-4 uppercase tracking-tight">Refund Process</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Refunds are processed only after receipt from our ground partners. 
              Non-refundable components like Convenience Fees, TCS, and Flight/Visa fees are deducted before processing. 
              The turnaround time is typically 15-30 business days.
            </p>
          </div>
        </section>

        {/* Vital Information */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black text-zinc-900 flex items-center gap-4">
            <span className="bg-purple-600 text-white w-2 h-8 rounded-full"></span>
            VITAL INFORMATION
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-zinc-100 p-4 rounded-2xl text-zinc-900 font-black">01</div>
              <p className="text-zinc-600 text-sm leading-relaxed pt-2">
                <strong>No-Show Policy:</strong> Any traveler who fails to arrive on time for a scheduled activity or transfer will be considered a "No-Show" and no refund will be provided.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-zinc-100 p-4 rounded-2xl text-zinc-900 font-black">02</div>
              <p className="text-zinc-600 text-sm leading-relaxed pt-2">
                <strong>Dispute Deadline:</strong> Any refund requests due to service denial or incomplete services must be submitted with valid evidence within 5 days of trip completion.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-zinc-100 p-4 rounded-2xl text-zinc-900 font-black">03</div>
              <p className="text-zinc-600 text-sm leading-relaxed pt-2">
                <strong>Visa Rejection:</strong> In case of visa denial, the standard tour cancellation policy mentioned above will still apply to the overall package.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="pb-24 text-center">
          <p className="text-zinc-400 text-sm italic">
            Note: Specific tour packages may have customized cancellation terms which will be detailed in your final Quotation. The Quotation terms will always supersede this general policy.
          </p>
        </section>
      </div>
    </div>
  );
}
