import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="gradient-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Empowering the Future with AI
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          HashtagAI delivers cutting-edge AI solutions to transform your
          business and drive innovation.
        </p>
        <a
          href="#footer"
          className="inline-flex items-center bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
