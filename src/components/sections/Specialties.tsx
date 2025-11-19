"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { specialties } from "@/data/specialties";
import { formatPrice } from "@/lib/utils";

export function SpecialtiesSection() {
  const [activeTab, setActiveTab] = useState(specialties[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="specialties" ref={ref} className="section-padding bg-accent-beige">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-lg">
            Chef's Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gray mt-2">
            Check our <span className="text-primary">Specialties</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Exclusive dishes crafted by our expert chefs using the finest
            Galápagos ingredients
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:w-1/4"
            >
              <TabsList className="flex flex-col h-auto bg-transparent gap-2 w-full">
                {specialties.map((specialty, index) => (
                  <TabsTrigger
                    key={specialty.id}
                    value={specialty.id}
                    className="w-full justify-start text-left px-4 py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary transition-all hover:bg-white/50"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {specialty.name}
                    </motion.div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {/* Tab Content */}
            <div className="lg:w-3/4">
              {specialties.map((specialty) => (
                <TabsContent
                  key={specialty.id}
                  value={specialty.id}
                  className="mt-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                  >
                    {/* Content */}
                    <div className="space-y-4 order-2 lg:order-1">
                      <div>
                        <h3 className="text-3xl font-bold text-accent-gray mb-2">
                          {specialty.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary">
                          {formatPrice(specialty.price)}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 italic leading-relaxed">
                        {specialty.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-accent-gray mb-2">
                          Ingredients:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {specialty.ingredients.map((ingredient, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
                      <Image
                        src={specialty.image}
                        alt={specialty.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
