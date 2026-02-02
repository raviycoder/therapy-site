"use client";

import Image from "next/image";
import Accordion, { AccordionItem } from "../ui/Accordion";

const faqData: AccordionItem[] = [
  {
    question: "Do you take insurance?",
    answer: "Answer goes here.",
  },
  {
    question: "What are your rates?",
    answer: "Answer goes here.",
  },
  {
    question: "Do you have any openings?",
    answer: "Answer goes here.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FBF6F1] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1536px] mx-auto py-16 lg:py-[101px] px-6 md:px-12 lg:px-[57.6px] gap-12 lg:gap-16 justify-end">
        {/* Left Side - Arch Image */}
        <div className="w-full lg:w-[38%] mx-auto lg:mx-0">
          <div className="relative w-full max-w-[460px] h-[500px] md:h-[600px] lg:h-[690px] rounded-t-[500px] md:rounded-t-[600px] lg:rounded-t-[800px] overflow-hidden">
            <Image
              src="/images/image10.webp"
              alt="Lavender flowers in soft focus"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - FAQ Content */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center">
          <h2
            className="text-[40px] md:text-[52.864px] font-medium text-primary mb-15 md:mb-20"
            style={{ lineHeight: "58.36px" }}
          >
            FAQs
          </h2>

          <Accordion
            items={faqData}
            size="large"
            iconPosition="first"
            allowMultiple={false}
          />
        </div>
      </div>
    </section>
  );
}
