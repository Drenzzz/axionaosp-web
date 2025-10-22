"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  { text: "Came from XX ROM to Axion ROM. Axion feels faster, less bloated, and to the point, not loaded with too much customizing. Big fan of this!", author: "— Gio" },
  { text: "This ROM is so smooth af, I'm restoring, and it's not even lagging like it normally does in other ROMs.", author: "— Ren" },
  { text: "Battery backup is Good on this rom", author: "— Hecker007" },
  { text: "The rom is too good and stable 🤩. The smoothness is also really well. It's giving an unique experience", author: "— Aeoniixx" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function CommunitySection() {
  return (
    <section id="community" className="py-20 overflow-hidden">
      <div className="container mx-auto px-24 text-center">
        <h2 className="text-4xl font-bold text-green-300 mb-4">Make your android better.</h2>
        <p className="text-neutral-300 mb-12 max-w-2xl mx-auto">Join everyone who has downloaded AxionOS. Join the performance revolution.</p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Card className="card-glow-effect bg-neutral-800/50 backdrop-blur-sm border-neutral-700/80 text-left h-full flex flex-col">
                <CardContent className="pt-8 text-neutral-300 flex-grow relative">
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-neutral-700/50" />
                  <p className="relative z-10">&quot;{item.text}&quot;</p>
                </CardContent>
                <CardFooter>
                  <p className="w-full text-right text-neutral-400 font-bold">{item.author}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
          
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="https://t.me/AxionOS_android" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="backdrop-blur-sm button-glow-effect px-8 py-6 rounded-full ">Join us on Telegram</Button>
          </a>
          <Link href="/downloads">
            <Button size="lg" className="bg-green-300 hover:bg-green-400 text-black font-bold button-glow-effect px-8 py-6 rounded-full">Download AxionOS</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
