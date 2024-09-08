"use client";

import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {

  return (
    <body>
      <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-100">Secure Poll</a>
        </div>
        
        <div className="flex items-center space-x-2"> 
        <ThemeToggle />
        <w3m-button />  
        </div>  
        
      </div>
    </nav>
    <main className="container mx-auto flex-1 p-6">
      {/* Hero Section without Banner */}
      <section className="flex-1 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Secure Poll</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          Easily create and manage polls securely with real-time feedback. Join thousands of users making data-driven decisions.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
          <a href="/create">Get Started</a>
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Why Choose Secure Poll?</h2>
          <div className="flex flex-wrap justify-around">
            <FeatureCard 
              title="Secure and Private"
              description="Your data is encrypted and safe with us."
              icon="🔒"
            />
            <FeatureCard 
              title="Real-Time Results"
              description="Get instant feedback and results as they come in."
              icon="⚡"
            />
            <FeatureCard 
              title="User-Friendly"
              description="Easy to set up and use, no technical skills needed."
              icon="✅"
            />
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </body>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

interface TestimonialCardProps {
  name: string;
  message: string;
  avatar: string;
}

interface FAQCardProps {
  question: string;
  answer: string;
}

// FeatureCard Component
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, message, avatar }: TestimonialCardProps) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <img src={avatar} alt={`${name}'s avatar`} className="w-16 h-16 rounded-full mx-auto mb-4" />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">"{message}"</p>
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{name}</h4>
      </div>
    </div>
  );
}


function FAQ({ question, answer }: FAQCardProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  );
}