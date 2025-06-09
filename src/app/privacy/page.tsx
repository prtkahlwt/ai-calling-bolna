// src/app/privacy/page.tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Importing a shield/privacy icon

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">
      {/* Red Header Banner */}
      <section className="w-full bg-gray-500 text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center mb-2">
          <ShieldCheck className="h-10 w-10 mr-4" /> {/* Privacy Policy icon */}
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <div className="container mx-auto max-w-4xl pl-14"> {/* Aligned with icon */}
          <p className="text-lg opacity-90">Learn how Smalls.ai collects, uses, and protects your information.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-4xl py-12 px-4 space-y-8">
        {/* Effective Date Banner */}
        <div className="border-l-4 border-red-500 bg-red-50 p-4 text-red-800 font-medium">
          Effective Date: May 1, 2025
        </div>

        {/* 1. Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><span className="font-semibold">Business and Contact Information:</span> Name, email, phone number, and company details</li>
            <li><span className="font-semibold">Lead Data:</span> Names, numbers, and other details of the leads you provide</li>
            <li><span className="font-semibold">Usage Data:</span> Logs of calls, transcripts, system interactions, and metadata</li>
            <li><span className="font-semibold">Payment Data:</span> Billing details (collected via third-party processors)</li>
          </ul>
        </section>

        {/* 2. How We Use Your Data */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Deliver and improve our AI cold-calling service</li>
            <li>Analyze call performance and lead behavior</li>
            <li>Maintain and improve platform functionality</li>
            <li>Communicate updates, support, and invoices</li>
          </ul>
        </section>

        {/* 3. Data Sharing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Data Sharing</h2>
          <p className="leading-relaxed">We do not sell your data. We may share data with:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Authorized service providers (e.g., cloud providers, analytics tools)</li>
            <li>Legal authorities, if required by law</li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Data Security</h2>
          <p className="leading-relaxed">
            We implement appropriate security controls (e.g., encryption, access controls) to protect your data.
            However, no method is 100% secure.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Data Retention</h2>
          <p className="leading-relaxed">
            We retain customer and call data for as long as needed to deliver services, comply with legal obligations, or resolve disputes.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Access and correct your data</li>
            <li>Request deletion (subject to legal obligations)</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        {/* 7. Third-Party Tools */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">7. Third-Party Tools</h2>
          <p className="leading-relaxed">
            Our platform may integrate with third-party tools (e.g., CRMs, calling APIs).
            Their privacy policies will apply in such cases.
          </p>
        </section>

        {/* 8. Updates to This Policy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">8. Updates to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We'll notify you of significant changes via email or through the platform.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-2">
          <h2 className="text-2xl font-bold">Questions About This Policy?</h2>
          <p className="leading-relaxed">
            For questions or concerns about your data, contact us at:
          </p>
          <ul className="space-y-1">
            <li><span className="font-semibold">Email:</span> <a href="mailto:ap2303898@gmail.com" className="text-blue-600 hover:underline">ap2303898@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
