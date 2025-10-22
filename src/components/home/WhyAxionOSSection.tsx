"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Palette, Settings2, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Experience lightning-fast speed and smoothness, optimized even for older devices.",
  },
  {
    icon: Palette,
    title: "Refined UI",
    description: "Enjoy a clean, familiar interface inspired by NothingOS and enhanced with Material You.",
  },
  {
    icon: Settings2,
    title: "Balanced Features",
    description: "Get essential, thoughtfully curated features without unnecessary bloat.",
  },
   {
    icon: Users,
    title: "Community Driven",
    description: "Developed collaboratively with feedback from our active user community.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhyAxionOSSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-900/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Why Choose <span className="text-green-300">AxionOS?</span>
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Card className="card-glow-effect bg-neutral-800/60 border border-neutral-700/80 text-left h-full p-4 sm:p-6">
                <CardHeader className="p-0 mb-4">
                  <pillar.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mb-3" />
                  <CardTitle className="text-lg sm:text-xl text-white">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-neutral-400 text-sm">
                  {pillar.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}