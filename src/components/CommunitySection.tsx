"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const testimonials = [
  { text: "Came from XX ROM to Axion ROM. Axion feels faster, less bloated, and to the point, not loaded with too much customizing. Big fan of this!", author: "— Gio" },
  { text: "This ROM is so smooth af, I'm restoring, and it's not even lagging like it normally does in other ROMs.", author: "— Ren" },
  { text: "Battery backup is Good on this rom", author: "— Hecker007" },
  { text: "The rom is too good and stable 🤩. The smoothness is also really well. It's giving an unique experience", author: "— Aeoniixx" }
];

export function CommunitySection() {
  return (
    <section id="community" className="py-20 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-300 mb-4">Make your android better.</h2>
        <p className="text-neutral-300 mb-8">Join everyone who has downloaded AxionOS. Join the performance revolution.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-neutral-800 border-neutral-700 text-left flex flex-col testimonial-card-glow">
              <CardContent className="pt-6 text-neutral-300 flex-grow">
                <p>"{item.text}"</p>
              </CardContent>
              <CardFooter>
                <p className="w-full text-right text-neutral-400 font-bold">{item.author}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button size="lg" variant="outline">Join us on Telegram</Button>
            <a href="/downloads">
              <Button size="lg" className="bg-green-300 hover:bg-green-400 text-black font-bold">Download AxionOS</Button>
            </a>
          </div>
      </div>
    </section>
  )
}
