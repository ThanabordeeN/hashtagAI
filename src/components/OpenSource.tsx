import React from 'react';
import { Github, Share2 } from 'lucide-react';

const OpenSource = () => {
  return (
    <section id="opensource" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Open Source Community
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          We believe in the power of collaboration. Join our open source
          community and help shape the future of AI.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/ThanabordeeN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="mr-2 w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560597801592"
            className="inline-flex items-center bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Share2 className="mr-2 w-5 h-5" />
            Contribute
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
