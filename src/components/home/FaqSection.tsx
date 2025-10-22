"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
      question: "Why is AxionAOSP a performance-oriented ROM?",
      answer: "AxionAOSP incorporates various performance optimizations from ProtonAOSP, along with our own efficiency tweaks."
    },
    {
      question: "Can you add Feature XX?",
      answer: "We welcome suggestions, but only if they are useful and non-intrusive."
    },
    {
      question: "Is battery life good on AxionAOSP?",
      answer: "Battery life depends on factors like kernel, usage, and configuration. AxionAOSP includes efficiency optimizations."
    },
    {
      question: "Does Play Integrity pass?",
      answer: "Yes, after updating pif properties in Settings → Special Features → Spoofing."
    },
    {
      question: "Where are the customizations?",
      answer: "AxionAOSP prioritizes performance over heavy customization."
    },
    {
      question: "How do I install AxionAOSP?",
      answer: "Follow the detailed installation guide on our documentation page."
    },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-400 mt-4">
            Punya pertanyaan? Jawaban yang paling umum ada di sini.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="backdrop-blur-sm w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                value={`item-${index + 1}`} 
                key={index}
                className="card-glow-effect bg-neutral-800/50 border border-neutral-700/80 rounded-xl px-6 transition-all hover:border-green-400/50"
              >
                <AccordionTrigger className="text-left py-5 text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-neutral-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
