import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">HashtagAI</h3>
            <p className="text-gray-400 dark:text-gray-400">
              Empowering the future with AI
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 dark:text-gray-400 hover:text-accent-color dark:hover:text-accent-color transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-gray-400 dark:text-gray-400 hover:text-accent-color dark:hover:text-accent-color transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#consulting"
                  className="text-gray-400 dark:text-gray-400 hover:text-accent-color dark:hover:text-accent-color transition-colors"
                >
                  Consulting
                </a>
              </li>
              <li>
                <a
                  href="#opensource"
                  className="text-gray-400 dark:text-gray-400 hover:text-accent-color dark:hover:text-accent-color transition-colors"
                >
                  Open Source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 dark:text-gray-400">
              Email: hashtagdotai@gmail.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560597801592"
                className="text-gray-400 dark:text-gray-400 hover:text-accent-color dark:hover:text-accent-color transition-colors"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center">
          <p className="text-gray-400 dark:text-gray-400">
            &copy; 2024 HashtagAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
