"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReservationForm } from "@/components/shared/ReservationForm";

export function Reservation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="reservation" ref={ref} className="section-padding bg-accent-beige">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-lg">
            Reserve Your Table
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gray mt-2">
            Book a <span className="text-primary">Table</span>
          </h2>
          <p className="text-gray-600 mt-4">
            For your comfort, book here quickly and safely
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <ReservationForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
