// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">
      
      {/* Hero Section - ID for "Home" link */}
      <section id="home" className="relative w-full py-20 text-center md:py-32 overflow-hidden px-4">
        <div className="container mx-auto max-w-4xl z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Smart AI Solutions <span className="text-primary">Specialised in AI Calling</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Leverage intelligent AI agents to handle sales, support, and surveys efficiently, 24/7, at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" passHref>
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
      </section>

      {/* Solutions Section - Renamed from "features" */}
      <section id="solutions" className="w-full py-16 bg-muted text-center px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-left">
              <CardHeader><CardTitle>Cold Calling</CardTitle></CardHeader>
              <CardContent>Our AI agents understand nuances, respond dynamically, and handle complex conversations like humans.</CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader><CardTitle>Customizable Call Scripts</CardTitle></CardHeader>
              <CardContent>Design specific call flows and scripts tailored to your campaign goals and brand voice.</CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader><CardTitle>Real-time Analytics</CardTitle></CardHeader>
              <CardContent>Gain insights into call outcomes, agent performance, and customer sentiment with detailed reports.</CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader><CardTitle>Seamless CRM Integration</CardTitle></CardHeader>
              <CardContent>Connect with your existing CRM to streamline data flow and enhance customer profiles.</CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader><CardTitle>Scalable & Cost-Effective</CardTitle></CardHeader>
              <CardContent>Handle millions of calls without increasing headcount, reducing operational costs significantly.</CardContent>
            </Card>
            <Card className="text-left">
              <CardHeader><CardTitle>Multi-language Support</CardTitle></CardHeader>
              <CardContent>Expand your reach globally with AI agents capable of speaking multiple languages fluently.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW: About Section */}
      <section id="about" className="w-full py-20 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Small.ai</h2>
          <p className="text-lg text-muted-foreground">
            We are a team of innovators dedicated to pushing the boundaries of artificial intelligence in communication. Our mission is to provide businesses with powerful, scalable, and intuitive AI calling solutions that drive growth and enhance customer engagement.
          </p>
        </div>
      </section>

      {/* NEW: Contact Section */}
      <section id="contact" className="w-full py-20 bg-muted text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Calling Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a demo today and see how our AI can revolutionize your business.
          </p>
          <Link href="/signup" passHref>
            <Button size="lg" className="px-8 py-6 text-lg">
              Sign Up and Book a Demo
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}