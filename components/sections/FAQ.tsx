"use client";

import Image from "next/image";
import Accordion, { AccordionItem } from "../ui/Accordion";
import FadeIn from "../ui/FadeIn";

const faqData: AccordionItem[] = [
  {
    question: "What is your approach to therapy?",
    answer:
      "I combine warm, supportive reflection with practical, evidence-based methods like CBT, EMDR, and mindfulness to help you find insight and relief.",
  },
  {
    question: "Do you offer online or in-person sessions?",
    answer:
      "Both. I offer in-person sessions at my Santa Monica office and secure telehealth for clients anywhere in California.",
  },
  {
    question: "What is EMDR and how does it help?",
    answer:
      "EMDR is a therapy that helps process traumatic memories, reducing the lingering emotional and physical distress from past experiences.",
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-background relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1536px] mx-auto py-16 lg:py-[101px] px-6 md:px-12 lg:px-[57.6px] gap-12 lg:gap-16 justify-end">
        {/* Left Side - Arch Image */}
        <FadeIn className="w-full lg:w-[38%] mx-auto lg:mx-0" delay={0}>
          <div className="relative w-full max-w-[460px] h-[500px] md:h-[600px] lg:h-[690px] rounded-t-[500px] md:rounded-t-[600px] lg:rounded-t-[800px] overflow-hidden">
            <Image
              src="/images2/image6.webp"
              alt="Lavender flowers in soft focus"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* Right Side - FAQ Content */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center">
          <FadeIn delay={100}>
            <h2
              className="text-[40px] md:text-[52.864px] font-medium text-primary mb-15 md:mb-20"
              style={{ lineHeight: "58.36px" }}
            >
              FAQs
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <Accordion
              items={faqData}
              size="large"
              iconPosition="first"
              allowMultiple={false}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
