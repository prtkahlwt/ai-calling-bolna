// src/app/page.tsx
import Image from "next/image";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ContactButtons from "@/components/ui/ContactButtons";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">
      
      {/* Hero Section - ID for "Home" link */}
      <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden px-4">
        {/*
          CHANGED:
          - max-w-4xl changed to max-w-7xl to provide more space for side-by-side content.
          - Added flex, flex-col (for mobile stacking), md:flex-row (for desktop side-by-side),
            items-center, justify-between, and gap classes for layout.
        */}
        <div className="container mx-auto max-w-7xl z-10 relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left side: Text content (Current H1, P, Buttons) */}
          <div className="text-center md:text-left md:w-1/2"> {/* Added md:text-left and md:w-1/2 for layout */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Smart AI Solutions <span className="text-primary">Specialised in AI Calling</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0"> {/* Added md:mx-0 for text alignment */}
              Leverage intelligent AI agents to handle sales, support, and surveys efficiently, 24/7, at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"> {/* Added md:justify-start for button alignment */}
              <Link
                href="https://calendly.com/ap2303898" // <-- IMPORTANT: Replace with your actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                passHref>
                <Button size="lg" className="px-8 py-6 text-lg">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/#solutions" passHref>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side: AI Image */}
          {/*
            NEW:
            - This div takes md:w-1/2 on larger screens.
            - Uses flex justify-center/md:justify-end to position the image.
            - Image component with src, alt, width/height for optimization.
            - `filter grayscale` applies the black and white effect.
            - `priority` for better loading performance.
          */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/ai.png" // Path to your image, assuming it's in the public folder
              alt="Polygonal AI Face"
              width={600} // Base width for Next.js Image optimization (adjust as needed)
              height={600} // Base height for Next.js Image optimization (adjust as needed)
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain filter grayscale"
              priority // Loads this image with high priority as it's above the fold
            />
          </div>
        </div>
      </section>

        {/* Solutions Section - Renamed from "features" */}
        {/* Solutions Section - Updated with crisp, data-driven cards */}
        <section id="solutions" className="w-full py-16 bg-muted px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">One Platform, Endless Solutions</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                From boosting sales to streamlining operations, our AI agents are designed to handle any calling task at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Cold Calling",
                  description: "Automate high-volume cold calling with tireless AI agents that scale your outreach without growing your team.",
                },
                {
                  title: "Feedback & Surveys",
                  description: "Deploy AI to automatically conduct post-service surveys and gather valuable customer feedback with zero manual effort.",
                },
                {
                  title: "Marketing & Promotion",
                  description: "Launch dynamic, omnichannel campaigns across voice, WhatsApp, and Email to announce new products and promotions instantly.",
                },
                {
                  title: "Instant Lead Engagement",
                  description: "Instantly call prospects the moment they submit a web form, engaging them while interest is highest to boost conversions.",
                },
                {
                  title: "24/7 Customer Support",
                  description: "Offer 24/7 customer support without the high cost of a live call center, providing instant answers to common questions.",
                },
                {
                  title: "Appointment Scheduling",
                  description: "Automate the entire booking process, from scheduling to confirmations, integrating with your calendars to eliminate conflicts.",
                },
                {
                  title: "Hiring Automation",
                  description: "Accelerate your hiring with AI-powered screening calls and video interviews to shortlist the best candidates in record time.",
                },
                {
                  title: "Reminders & Confirmations",
                  description: "Reduce no-shows and operational costs with automated reminders for appointments, payments, and address confirmations.",
                },
              ].map((solution) => (
                <Card key={solution.title} className="text-left text-lg">
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    <p>{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: About Section */}
        <section id="about" className="w-full py-20 text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Smalls.ai</h2>
            <p className="text-lg text-muted-foreground">
              We are a team of innovators dedicated to pushing the boundaries of artificial intelligence in communication. Our mission is to provide businesses with powerful, scalable, and intuitive AI calling solutions that drive growth and enhance customer engagement.
            </p>
          </div>
        </section>

        {/* Contact Section - Updated with new buttons */}
        <section id="contact" className="w-full py-20 bg-muted text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Calling Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a demo today and see how our AI can revolutionize your business.
            </p>

            {/* 2. Replace the old button with the new component */}
            <ContactButtons />

          </div>
        </section>

      </div>
  );
}
