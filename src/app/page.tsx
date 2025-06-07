// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// Navbar and Footer imports are removed as they are in layout.tsx

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative w-full py-20 text-center md:py-32 overflow-hidden px-4">
        <div className="container mx-auto max-w-4xl z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Smart AI Solutions <span className="text-primary">Specialised in AI Calling</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Leverage intelligent AI agents to handle sales, support, and surveys efficiently, 24/7, at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" passHref>
              <Button size="lg" className="px-8 py-6 text-lg"> {/* This button should remain primary/dark */}
                Get Started for Free
              </Button>
            </Link>
            <Link href="#features" passHref>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        {/* Optional: Add a subtle background image or pattern.
            If you want to use an image, save it in `public/images/ai-pattern.svg` (or similar)
            and uncomment the block below. Ensure the path is correct.
        */}
        {/*
        <div className="absolute inset-0 z-0 opacity-5">
            <Image
              src="/images/ai-pattern.svg" // Replace with your actual AI-themed pattern or illustration
              alt="AI background pattern"
              layout="fill"
              objectFit="cover"
              className="dark:invert"
              priority // For hero section background image
            />
        </div>
        */}
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 bg-muted text-center px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Powerful Features Designed for Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1: Intelligent AI Agents */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Cold Calling</CardTitle>
              </CardHeader>
              <CardContent>
                Our AI agents understand nuances, respond dynamically, and handle complex conversations like humans.
              </CardContent>
            </Card>
            {/* Feature Card 2: Customizable Call Scripts */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Customizable Call Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                Design specific call flows and scripts tailored to your campaign goals and brand voice.
              </CardContent>
            </Card>
            {/* Feature Card 3: Real-time Analytics */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                Gain insights into call outcomes, agent performance, and customer sentiment with detailed reports.
              </CardContent>
            </Card>
            {/* Feature Card 4: Seamless CRM Integration */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Seamless CRM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                Connect with your existing CRM to streamline data flow and enhance customer profiles.
              </CardContent>
            </Card>
            {/* Feature Card 5: Scalable & Cost-Effective */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Scalable & Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                Handle millions of calls without increasing headcount, reducing operational costs significantly.
              </CardContent>
            </Card>
            {/* Feature Card 6: Multi-language Support */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent>
                Expand your reach globally with AI agents capable of speaking multiple languages fluently.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Calling Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join businesses revolutionizing their customer engagement with AI.
          </p>
          <Link href="/signup" passHref>
            <Button size="lg" className="px-8 py-6 text-lg">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}