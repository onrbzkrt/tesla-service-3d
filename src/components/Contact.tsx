'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaTelegram, FaViber, FaInstagram } from 'react-icons/fa';
import { FormEvent } from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          İletişim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <MapPinIcon className="w-6 h-6 text-blue-500" />
              <p className="text-gray-300">Los Angeles, CA</p>
            </div>

            <div className="flex items-center space-x-4">
              <PhoneIcon className="w-6 h-6 text-blue-500" />
              <a
                href="tel:+13106541722"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                +1 310 654 1722
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="w-6 h-6 text-blue-500" />
              <a
                href="mailto:contact@evexpert.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                contact@evexpert.com
              </a>
            </div>

            {/* Sosyal Medya */}
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://wa.me/13106541722"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/13106541722"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <FaTelegram />
              </a>
              <a
                href="viber://chat?number=13106541722"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                <FaViber />
              </a>
              <a
                href="https://instagram.com/repair_tesla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Mesajınız"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 