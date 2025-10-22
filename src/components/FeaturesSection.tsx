"use client";

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, ToyBrick, Eye, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

const highlightedFeatures = [
  {
    icon: SlidersHorizontal,
    title: "Performance Toolkit",
    description: "Fine-tune your device's performance with user-configurable management tools.",
  },
  {
    icon: ToyBrick,
    title: "NothingOS Inspired",
    description: "Experience a unique blend of NothingOS aesthetics and Material You flexibility.",
  },
  {
    icon: Eye,
    title: "QuickLook Widget",
    description: "Get at-a-glance info for weather, calendar, and music right on your lockscreen.",
  },
   {
    icon: Settings,
    title: "Curated Essentials",
    description: "Enjoy useful features like App Locker, Sidebar, and network speed indicators without clutter.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 overflow-hidden bg-neutral-900/50">
      <div className="container mx-auto px-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Thoughtfully Curated Features
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
           Discover essential features designed for efficiency and a clean user experience—just what you need.
        </p>

        <motion.div
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-12"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           transition={{ staggerChildren: 0.1 }}
        >
          {highlightedFeatures.map((feature, index) => (
             <motion.div key={index} variants={cardVariants} className="h-full">
               <Card className="card-glow-effect bg-neutral-800/60 border border-neutral-700/80 text-left h-full p-6">
                 <CardHeader className="p-0 mb-4">
                   <feature.icon className="w-8 h-8 text-green-400 mb-3" />
                   <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0 text-neutral-400 text-sm">
                   {feature.description}
                 </CardContent>
               </Card>
             </motion.div>
          ))}
        </motion.div>

        <Link href="/features">
             <Button variant="outline" className="backdrop-blur-sm button-glow-effect px-8 py-6 rounded-full ">See All Features</Button>
        </Link>
        {/* <a href="https://github.com/AxionAOSP/axion_features/blob/lineage-22.1/README.md" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" className="backdrop-blur-sm button-glow-effect px-8 py-6 rounded-full ">See All Features</Button>
        </a> */}
      </div>
    </section>
  );
}
