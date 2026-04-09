import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-16 mt-10 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Legal Agreement
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-6" />
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto mb-16 p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 italic text-zinc-600 leading-relaxed text-center">
        These Terms and Conditions ("T&C") set forth the legally binding framework between you ("User," "You," or "Your") and <strong>VoyageVoyager</strong> for accessing or using our website, applications, or booking any travel services. By using our Platform, You acknowledge that you have read, understood, and agreed to these T&C.
      </div>

      {/* Main Content Grid */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* 1. Definitions */}
        <section>
          <h2 className="text-2xl font-black text-zinc-900 mb-8 flex items-center gap-4">
            <span className="bg-zinc-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            DEFINITIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-zinc-900 mb-2 uppercase text-xs tracking-wider text-purple-600">User / You</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Any person visiting, accessing, or making a Booking through VoyageVoyager.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-zinc-900 mb-2 uppercase text-xs tracking-wider text-purple-600">Booking</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Any confirmed reservation for an experience, activity, or complete tour package.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-zinc-900 mb-2 uppercase text-xs tracking-wider text-purple-600">Supplier</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">Third-party entities engaged to deliver specific components of Travel Services.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-zinc-900 mb-2 uppercase text-xs tracking-wider text-purple-600">Quotation</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">A formal offer detailing itinerary, inclusions, and final binding pricing.</p>
            </div>
          </div>
        </section>

        {/* 2. Scope */}
        <section>
          <div className="bg-zinc-900 text-white p-10 md:p-16 rounded-[3rem] shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              APPLICATION & SCOPE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-2 border-purple-600 pl-6">
                <h3 className="font-black text-lg mb-2">Part A</h3>
                <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-widest font-bold mb-4">Direct Experiences</p>
                <p className="text-zinc-300 text-sm">Single standalone activities or tickets booked individually.</p>
              </div>
              <div className="border-l-2 border-purple-600 pl-6">
                <h3 className="font-black text-lg mb-2">Part B</h3>
                <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-widest font-bold mb-4">Operated Tour Packages</p>
                <p className="text-zinc-300 text-sm">Multi-service itineraries operated and coordinated by VoyageVoyager.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Role of VoyageVoyager */}
        <section className="bg-purple-50 p-10 md:p-16 rounded-[3rem]">
          <h2 className="text-2xl font-black text-zinc-900 mb-8 border-b border-purple-100 pb-4">
            ROLE OF VOYAGEVOYAGER
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-purple-600 mb-2 uppercase text-xs tracking-widest">Part A: Facilitator Role</h4>
              <p className="text-zinc-600 text-sm leading-relaxed">For single activities, we act as a booking facilitator. The service is provided independently by third-party suppliers.</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-600 mb-2 uppercase text-xs tracking-widest">Part B: Principal Tour Operator Role</h4>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">For complete packages, we act as the principal operator, managing itinerary design, supplier selection, and end-to-end execution.</p>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-zinc-500">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-100">• Design & Planning</div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-purple-100">• Execution Oversight</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Policies */}
        <section className="space-y-12">
          <h2 className="text-2xl font-black text-zinc-900 border-l-4 border-purple-600 pl-4">PART B: OPERATED TOUR PACKAGES</h2>
          
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">B3. FLIGHT MOVEMENT</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">VoyageVoyager facilitates flight bookings; however, operations remain governed by individual airline policies regarding delays, baggage, and cancellations.</p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">B5. VISA POLICY</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Visa issuance is at embassy discretion. Fees are non-refundable. Visa denial does not override standard tour cancellation terms.</p>
            </div>

            <div className="group">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">B7. CANCELLATIONS & MODIFICATIONS</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Cancellations follow the Quotation schedule. Modifications (dates, participants) incur a fee of 10% of package cost or INR 20,000, whichever is lower, plus price differences.</p>
            </div>
          </div>
        </section>

        {/* 5. Liability */}
        <section className="border-t border-zinc-100 pt-16">
          <h2 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-tight">LIMITATION OF LIABILITY</h2>
          <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-sm text-zinc-600 space-y-4">
            <p>• Total aggregate liability is limited to the total amount paid for the booking.</p>
            <p>• We are not liable for indirect losses such as missed connections, incidental expenses, or loss of enjoyment.</p>
            <p>• Users are responsible for timely arrival and providing accurate participant details.</p>
          </div>
        </section>

        {/* 6. Legal Governing Law */}
        <section className="pb-24">
          <h2 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-tight">GOVERNING LAW</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            These terms are governed by the laws of our primary operating jurisdiction. Disputes shall be subject to exclusive jurisdiction of the courts designated in your final Quotation.
          </p>
          <div className="mt-12 text-center text-zinc-400 text-xs italic">
            © 2026 VoyageVoyager. All rights reserved. REVISIONS: We may update these T&C at any time. Continued use of the Platform constitutes acceptance of the new terms.
          </div>
        </section>

      </div>
    </div>
  );
}
