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
    }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.slice(0, 2).map((item, index) => (
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.slice(2, 4).map((item, index) => (
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
