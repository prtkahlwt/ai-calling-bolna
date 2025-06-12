// src/app/page.tsx
import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ContactButtons from "@/components/ui/ContactButtons";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaGoogle, FaDatabase, FaSmile, FaUserTie, FaGlobe, FaTools, FaMoneyBillWave, FaUserShield, FaLanguage, FaMagic } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background text-foreground font-[var(--font-geist-sans)]">

      {/* Hero Section - ID for "Home" link */}
      <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden px-4">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/vdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-muted z-10 pointer-events-none" />

        <div className="container mx-auto max-w-7xl z-10 relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left side: Text content (Current H1, P, Buttons) */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Smart AI Solutions <span className="text-primary">Specialised in AI Calling</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0 text-white">
              Leverage intelligent AI agents to handle sales, support, and surveys efficiently, 24/7, at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* <Link
                href="https://calendly.com/prateekahlawat1223/smalls-ai-demo" // <-- IMPORTANT: Replace with your actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                passHref>
                <Button size="lg" className="px-8 py-6 text-lg bg-primary text-primary-foreground shadow hover:bg-primary/90">
                  Book a Meeting
                </Button>
              </Link>
              <Link href="/#solutions" passHref>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  Call Us
                </Button>
              </Link> */}
              <ContactButtons />
            </div>
          </div>

          {/* Right side: AI Image */}
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


      {/* <div className="w-full h-8 bg-gradient-to-b from-background to-muted" /> */}

      {/* Solutions Section - Updated with crisp, data-driven cards */}
      <section id="solutions" className="relative w-full py-16 bg-muted px-4">
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
                title: "Cold Calling & Feedback",
                description: "Combine high-volume outreach with instant post-call feedback collection, powered by AI agents that never tire.",
                moreInfo: "Ideal for sales and service follow-ups — reach thousands of leads and collect real-time insights like satisfaction scores, all in one seamless interaction.",
              },
              {
                title: "Chatbots",
                description: "Deploy intelligent chatbots to handle FAQs, collect information, and support users across web and messaging platforms.",
                moreInfo: "Engage customers 24/7 with contextual, multi-turn conversations via chat, reducing support load and enhancing user experience.",
              },
              {
                title: "Marketing & Promotion",
                description: "Launch dynamic, omnichannel campaigns across voice, WhatsApp, and Email to announce new products and promotions instantly.",
                moreInfo: "Maximize campaign effectiveness by combining personalized calls with follow-up messages on WhatsApp and Email.",
              },
              {
                title: "Instant Lead Engagement",
                description: "Instantly call prospects the moment they submit a web form, engaging them while interest is highest to boost conversions.",
                moreInfo: "Capture leads while they are most interested, reducing response times and improving conversion rates dramatically.",
              },
              {
                title: "24/7 Customer Support",
                description: "Offer 24/7 customer support without the high cost of a live call center, providing instant answers to common questions.",
                moreInfo: "AI agents handle FAQs and transactional queries round the clock, improving support availability and satisfaction.",
              },
              {
                title: "Appointment Scheduling",
                description: "Automate the entire booking process, from scheduling to confirmations, integrating with your calendars to eliminate conflicts.",
                moreInfo: "Great for healthcare, salons, coaching centers — ensure accurate booking and reduce manual intervention.",
              },
              {
                title: "Hiring Automation",
                description: "Accelerate your hiring with AI-powered screening calls and video interviews to shortlist the best candidates in record time.",
                moreInfo: "Automated first-level screening helps HR teams focus on the most promising candidates, saving time and resources.",
              },
              {
                title: "Reminders & Confirmations",
                description: "Reduce no-shows and operational costs with automated reminders for appointments, payments, and address confirmations.",
                moreInfo: "Timely reminders sent through calls, WhatsApp, or SMS reduce dropouts and improve operational efficiency.",
              },
            ]
              .map((solution) => (
                <div
                  key={solution.title}
                  className="relative group overflow-hidden rounded-xl shadow-lg bg-background p-6 transition-transform transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm mt-4">
                    <p>{solution.description}</p>
                  </CardContent>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/95 text-white flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h4 className="text-lg font-bold mb-2">{solution.title}</h4>
                    <p className="text-sm">{solution.moreInfo}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="w-full h-8 bg-gradient-to-b from-muted to-background" />


      {/* NEW: About Section - MODIFIED FOR IMAGE */}
      <section id="about" className="w-full py-20 px-4"> {/* Removed bg-muted as it's not in the target image */}
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left side: About Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start"> {/* Adjusted justify for left alignment */}
            <Image
              src="/robot.png" // Path to your about image, assuming it's in the public folder
              alt="Illustration of a person interacting with virtual elements"
              width={400} // Base width for Next.js Image optimization (adjust as needed)
              height={400} // Base height for Next.js Image optimization (adjust as needed)
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain filter grayscale" // Added grayscale filter
              loading="lazy" // Not above the fold, so lazy load
            />
          </div>

          {/* Right side: About Text Content */}
          <div className="text-center md:text-left md:w-1/2"> {/* Adjusted text alignment and width */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Smalls AI</h2>
            <p className="text-lg text-muted-foreground">
              We are a team of innovators dedicated to pushing the boundaries of artificial intelligence in communication. Our mission is to provide businesses with powerful, scalable, and intuitive AI calling solutions that drive growth and enhance customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="w-full h-8 bg-gradient-to-b from-muted to-background" /> */}

      <div className="w-full h-8 bg-gradient-to-b from-background to-muted" />

      <section id="features" className="w-full py-16 bg-muted px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Built for Scale, Designed for Flexibility</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Explore the core features and language capabilities that make our AI agents adaptable to any industry or use case.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered Agents",
                description: "Deploy dedicated AI agents that can handle high-volume calling and intelligent conversations on demand.",
                moreInfo: "Our AI agents use NLP and advanced conversational flows to simulate human-like interactions at scale.",
                icon: <FaUserTie size={32} />,
              },
              {
                title: "Dedicated Phone Numbers",
                description: "Provision unique phone numbers for personalized campaigns and seamless caller identity.",
                moreInfo: "Each campaign or department can have its own number, improving branding and tracking.",
                icon: <FaPhoneAlt size={32} />,
              },
              {
                title: "Omnichannel Integration",
                description: "Connect effortlessly via Email, WhatsApp, SMS, and Google Meet for an all-in-one engagement experience.",
                moreInfo: "Unified communication layer lets you switch channels seamlessly based on user preferences.",
                icon: <div className="flex gap-2">
                  <FaEnvelope size={28} />
                  <FaWhatsapp size={28} />
                  <FaGoogle size={28} />
                </div>,
              },
              {
                title: "Real-time Data Extraction",
                description: "Automatically extract and store insights from every call to power analytics and business decisions.",
                moreInfo: "Data points include call duration, customer sentiment, key topics, and actionable insights.",
                icon: <FaDatabase size={32} />,
              },
              {
                title: "Sentiment Analysis",
                description: "Gauge customer sentiment and satisfaction in real time to inform follow-up actions and improve CX.",
                moreInfo: "Our AI uses tone, keyword analysis, and speech patterns to detect customer satisfaction.",
                icon: <FaSmile size={32} />,
              },
              {
                title: "CRM Management",
                description: "Integrate with your CRM or explore built-in CRM features to manage leads and customer journeys.",
                moreInfo: "Seamless integration with popular CRMs or custom pipelines.",
                icon: <FaUserShield size={32} />,
              },
              {
                title: "24/7 System Uptime & Support",
                description: "Enjoy reliable system performance with around-the-clock live support and monitoring.",
                moreInfo: "Our servers and support team ensure 99.99% uptime and proactive issue resolution.",
                icon: <FaGlobe size={32} />,
              },
              {
                title: "Custom Tool Integration",
                description: "Integrate with your business tools and workflows through flexible APIs and custom connectors.",
                moreInfo: "Connect to ERPs, CRMs, payment gateways, and any REST API for custom workflows.",
                icon: <FaTools size={32} />,
              },
              {
                title: "Dynamic Payment Options",
                description: "Support dynamic, usage-based billing models—ideal for scaling customer support or seasonal campaigns.",
                moreInfo: "Pay only for what you use — perfect for variable-volume businesses.",
                icon: <FaMoneyBillWave size={32} />,
              },
              {
                title: "Dedicated Account Manager",
                description: "Partner with a dedicated account manager for tailored strategy, onboarding, and optimization support.",
                moreInfo: "Work closely with a dedicated expert to maximize your ROI.",
                icon: <FaUserTie size={32} />,
              },
              {
                title: "Multi-language Model",
                description: "Deliver conversations in 7 languages — English, Hindi, Marathi, Kannada, Malayalam, Telugu, and Tamil.",
                moreInfo: "Regional language support lets you reach wider audiences with native-like fluency.",
                icon: <FaLanguage size={32} />,
              },
              {
                title: "Personality Customizer (Unique!)",
                description: "Design your agent’s tone, style, and even humor level with our unique Personality Customizer feature.",
                moreInfo: "Make your AI agent formal, friendly, humorous, or match your brand personality.",
                icon: <FaMagic size={32} />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-background p-6 transition-transform transform hover:scale-105"
              >
                <CardHeader className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm mt-4">
                  <p>{feature.description}</p>
                </CardContent>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/95 text-white flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm">{feature.moreInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-8 bg-gradient-to-b from-muted to-background" />

      {/* Contact Section - Updated with new buttons */}
      <section id="contact" className="w-full py-20 text-center px-4">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Calling Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a demo today and see how our AI can revolutionize your business.
            </p>

            {/* 2. Replace the old button with the new component */}
            <ContactButtons />

          </div>

          <div className="md:w-1/2 flex justify-center md:justify-start"> {/* Adjusted justify for left alignment */}
            <Image
              src="/logo-bg-removed.png" // Path to your about image, assuming it's in the public folder
              alt="Smalls AI Logo"
              width={400} // Base width for Next.js Image optimization (adjust as needed)
              height={400} // Base height for Next.js Image optimization (adjust as needed)
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain filter grayscale" // Added grayscale filter
              loading="lazy" // Not above the fold, so lazy load
            />
          </div>
        </div>

      </section>

    </div>
  );
}
