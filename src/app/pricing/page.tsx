// src/app/pricing/page.tsx
import Link from "next/link";
import { Check, ArrowRight, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Import cn utility if not already present

interface PricingFeatureProps {
  text: string;
  isProCard?: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text, isProCard = false }) => (
  <li className="flex items-center text-left">
    {/* FIX: Change icon color for Pro card to text-black */}
    <Check className={cn("h-4 w-4 mr-2 flex-shrink-0", isProCard ? 'text-black' : 'text-brand-blue')} />
    {/* FIX: Change text color for Pro card to text-black */}
    <span className={cn(isProCard ? '!text-black' : 'text-muted-foreground')}>{text}</span>
  </li>
);

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)] py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Take back your day.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Smalls AI Starter Card */}
        <Card className="flex flex-col items-center p-6 border-2 border-border shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <CardHeader className="w-full text-center pb-6">
            <RotateCw className="h-8 w-8 text-brand-blue mb-4 mx-auto" />
            <CardTitle className="text-3xl font-bold mb-2">Smalls AI Starter</CardTitle>
            <p className="text-4xl font-extrabold text-foreground">$9.95/mo</p>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center pt-0">
            <Link href="/signup" passHref className="w-full mb-8">
              <Button className="w-full bg-brand-blue hover:bg-gray-100 text-black text-lg py-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300">
                Free Trial <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <ul className="space-y-3 w-full">
              <PricingFeature text="AI Call Screening" />
              <PricingFeature text="Private Phone Number" />
              <PricingFeature text="Call Recordings" />
              <PricingFeature text="AI Call Summary" />
              <PricingFeature text="Up to 1,000 Calls Monthly" />
            </ul>
          </CardContent>
        </Card>

        {/* Smalls AI Pro Card (Highlighted) */}
        <Card className="flex flex-col items-center p-6 bg-gradient-to-br from-brand-blue-dark to-brand-blue-light border-2 border-brand-blue-dark shadow-xl rounded-xl transform scale-105 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <CardHeader className="w-full text-center pb-6">
            {/* FIX: Change icon color to text-black */}
            <RotateCw className="h-8 w-8 text-black mb-4 mx-auto" />
            {/* FIX: Change title color to text-black */}
            <CardTitle className="text-3xl font-bold mb-2 text-black">Smalls AI Pro</CardTitle>
            {/* FIX: Change price color to text-black */}
            <p className="text-4xl font-extrabold text-black">$39.95/mo</p>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center pt-0 bg-transparent">
            <Link href="/signup" passHref className="w-full mb-8">
              {/* This button already uses text-brand-blue on white background, so it's good */}
              <Button className="w-full bg-white text-brand-blue hover:bg-gray-100 text-lg py-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <ul className="space-y-3 w-full">
              {/* PricingFeature component will now apply text-black due to isProCard */}
              <PricingFeature text="Everything in Starter" isProCard />
              <PricingFeature text="Custom Voice Selection" isProCard />
              <PricingFeature text="Assign a Name" isProCard />
              <PricingFeature text="Select Phone Area Code" isProCard />
              <PricingFeature text="Up to 3,000 Calls Monthly" isProCard />
            </ul>
          </CardContent>
        </Card>

        {/* Smalls AI Enterprise Card */}
        <Card className="flex flex-col items-center p-6 border-2 border-border shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <CardHeader className="w-full text-center pb-6">
            <RotateCw className="h-8 w-8 text-brand-blue mb-4 mx-auto" />
            <CardTitle className="text-3xl font-bold mb-2">Smalls AI Enterprise</CardTitle>
            <p className="text-4xl font-extrabold text-foreground">Contact Us</p>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center pt-0">
            <Link href="/contact" passHref className="w-full mb-8">
              <Button className="w-full bg-brand-blue hover:bg-gray-100 text-black text-lg py-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300">
                Get in Contact <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <ul className="space-y-3 w-full">
              <PricingFeature text="Everything in Pro" />
              <PricingFeature text="Customize Wait Times" />
              <PricingFeature text="Setup Call Routing" />
              <PricingFeature text="Add Functions to AI" />
              <PricingFeature text="Infinite Calls" />
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
