// src/app/terms/page.tsx
import React from 'react';
import { FileText } from 'lucide-react'; // Importing a document icon

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">
      {/* Red Header Banner */}
      <section className="w-full bg-gray-400 text-white py-12 px-4 md:px-6 shadow-md">
        <div className="container mx-auto max-w-4xl flex items-center mb-2">
          <FileText className="h-10 w-10 mr-4" />
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        </div>
        <div className="container mx-auto max-w-4xl pl-14"> {/* Aligned with icon */}
          <p className="text-lg opacity-90">Please read these terms carefully before using Smalls.ai services</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-4xl py-12 px-4 space-y-8">
        {/* Effective Date Banner */}
        <div className="border-l-4 border-red-500 bg-red-50 p-4 text-red-800 font-medium">
          Effective Date: May 1, 2025
        </div>

        <p className="text-lg leading-relaxed">
          Welcome to Smalls.ai! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our services,
          including any associated software, features, or applications provided by Smalls.ai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
        </p>

        {/* 1. Acceptance of Terms */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing or using Smalls.ai&apos;s services, you agree to be bound by these Terms and our Privacy Policy.
            If you do not agree, please do not use the service.
          </p>
        </section>

        {/* 2. Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Services</h2>
          <p className="leading-relaxed">
            Smalls.ai provides AI-based outbound cold-calling services designed to assist businesses with lead qualification.
            Services may include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>AI voice agents for outbound calls</li>
            <li>Lead data processing</li>
            <li>Call transcript analysis and reporting</li>
            <li>CRM integration</li>
          </ul>
        </section>

        {/* 3. Eligibility */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Eligibility</h2>
          <p className="leading-relaxed">
            You must be at least 18 years old and authorized to act on behalf of your business to use Smalls.ai.
          </p>
        </section>

        {/* 4. User Responsibilities */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. User Responsibilities</h2>
          <p className="leading-relaxed">You agree to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Provide accurate and lawful lead data</li>
            <li>Use the services only for lawful business purposes</li>
            <li>Not misuse the service, reverse engineer, or attempt to breach security</li>
          </ul>
        </section>

        {/* 5. Subscription and Payment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Subscription and Payment</h2>
          <p className="leading-relaxed">
            Services are provided under a subscription-based model. Payment terms, subscription tiers, and pricing are
            specified on our website or in your contract.
          </p>
          <p className="leading-relaxed">
            Failure to pay may result in suspension or termination of your access.
          </p>
        </section>

        {/* 6. Data Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Data Usage</h2>
          <p className="leading-relaxed">
            You grant Smalls.ai a license to process your lead and call data for the purposes of delivering the service.
            You retain ownership of your data.
          </p>
        </section>

        {/* 7. Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
          <p className="leading-relaxed">
            All software, content, and trademarks related to Smalls.ai are our exclusive property.
            You may not use them without our prior written consent.
          </p>
        </section>

        {/* 8. Termination */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">8. Termination</h2>
          <p className="leading-relaxed">
            We reserve the right to suspend or terminate your access if you breach these Terms or engage in unlawful activity.
          </p>
        </section>

        {/* 9. Disclaimer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">9. Disclaimer</h2>
          <p className="leading-relaxed">
            Smalls.ai is provided &quot;as is.&quot; We do not guarantee specific business outcomes or leads.
            We are not liable for indirect or consequential damages.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">10. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of India. Disputes shall be resolved in the courts of Mumbai, Maharashtra.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-2">
          <h2 className="text-2xl font-bold">Questions About These Terms?</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="space-y-1">
            <li><span className="font-semibold">Email:</span> <a href="mailto:smallsaiwork@gmail.com" className="text-blue-600 hover:underline">smallsaiwork@gmail.com</a></li>
            {/* <li><span className="font-semibold">Address:</span> Smalls.ai, Hauz Khas, Delhi, India</li> */}
          </ul>
        </section>
      </div>
    </div>
  );
}
