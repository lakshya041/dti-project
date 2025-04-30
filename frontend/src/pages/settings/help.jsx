import React from "react";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

const HelpContent = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Help & Support</h2>

      <div className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <HelpCircle className="w-5 h-5 mr-2" />
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Find quick answers to common questions about using the platform.
          </p>
          <button 
          onClick={() => window.location.href = '/faq'}
          className="text-blue-400 hover:underline text-sm cursor-pointer">
            Browse FAQs →
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Live Chat Support
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Chat with our support team for real-time help.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            Start Chat
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Need more help? Reach out to our support team via email.
          </p>
          <button className="text-blue-400 hover:underline text-sm">
            Send an Email →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
