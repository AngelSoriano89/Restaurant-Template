"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// 🎨 PLANTILLA - Personaliza el contenido de tu restaurante
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-accent-beige"
    >
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&h=800&fit=crop"
              alt="Our restaurant story"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-primary font-semibold text-lg"
              >
                About Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-accent-gray mt-2"
              >
                Welcome to{" "}
                <span className="text-primary">Gourmet Haven</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We are known for creating{" "}
              <strong className="text-accent-gray">
                an unforgettable dining experience
              </strong>
              , combining traditional culinary techniques with modern innovation
              and the freshest local ingredients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-600 leading-relaxed"
            >
              Located in the heart of the city, our restaurant has been serving
              exceptional cuisine for over a decade. Each dish is crafted with
              passion, using only the finest seasonal ingredients sourced from
              local farmers and producers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="font-semibold text-accent-gray">
                  Expert Chefs
                </h3>
                <p className="text-sm text-gray-600">
                  Award-winning culinary team
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-accent-gray">
                  Fresh Ingredients
                </h3>
                <p className="text-sm text-gray-600">
                  Locally sourced & seasonal
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🍷</span>
                </div>
                <h3 className="font-semibold text-accent-gray">
                  Fine Wines
                </h3>
                <p className="text-sm text-gray-600">
                  Curated wine selection
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-accent-gray">
                  Elegant Atmosphere
                </h3>
                <p className="text-sm text-gray-600">
                  Perfect for any occasion
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
