'use client';

import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

interface Reason {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const reasons: Reason[] = [
  {
    title: 'Uzman Ekip',
    description: 'Tesla araçları konusunda uzmanlaşmış deneyimli teknisyenler',
    icon: UserGroupIcon,
  },
  {
    title: 'Hızlı Servis',
    description: 'Minimum bekleme süresi ile hızlı ve etkili çözümler',
    icon: ClockIcon,
  },
  {
    title: 'Uygun Fiyat',
    description: 'Rekabetçi fiyatlar ve şeffaf fiyatlandırma politikası',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Kalite Garantisi',
    description: 'Tüm hizmetlerimizde kalite ve müşteri memnuniyeti garantisi',
    icon: CheckBadgeIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Neden Bizi Seçmelisiniz?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-4">
                <reason.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300">
            Los Angeles&apos;ın önde gelen Tesla servis merkezi olarak, 
            aracınıza en iyi bakımı sunuyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 