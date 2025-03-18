'use client';

import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const services: Service[] = [
  {
    title: 'Tamir ve Bakım',
    description: 'Tesla aracınız için profesyonel tamir ve bakım hizmetleri',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Diagnostik',
    description: 'Gelişmiş teşhis sistemleri ile sorunların hızlı tespiti',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Batarya Servisi',
    description: 'Batarya bakımı, onarımı ve performans optimizasyonu',
    icon: BoltIcon,
  },
  {
    title: 'Yazılım Güncellemeleri',
    description: 'En son yazılım güncellemelerinin yüklenmesi ve optimizasyonu',
    icon: CogIcon,
  },
  {
    title: 'Garanti İşlemleri',
    description: 'Garanti kapsamındaki işlemlerin takibi ve yönetimi',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Periyodik Bakım',
    description: 'Düzenli bakım planlaması ve takibi',
    icon: ArrowPathIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
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
          Hizmetlerimiz
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 