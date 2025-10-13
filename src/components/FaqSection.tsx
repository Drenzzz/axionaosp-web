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
    <section id="faq" className="py-20 max-w-4xl mx-auto ">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-x-8 container mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.slice(0, 3).map((item, index) => (
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.slice(3, 6).map((item, index) => (
            <AccordionItem value={`item-${index+3}`} key={index}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
