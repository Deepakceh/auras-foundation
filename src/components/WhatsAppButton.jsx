'use client';

import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '919999146263'; // Full number with country code
  const message = "Hi! I'm interested in joining chess classes."; // Predefined message

  // Ensure the message is properly encoded
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
    >
      <MessageCircleMore className="w-6 h-6" />
    </Link>
  );
}
