"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  size?: "small" | "medium" | "large";
  iconPosition?: "first" | "last";
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  size = "large",
  iconPosition = "last",
  className = "",
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  // Size variants
  const sizeStyles = {
    small: {
      question: "text-[20px] md:text-[25px]",
      answer: "text-[16px] md:text-[19px]",
      padding: "py-3 md:py-4",
      icon: "w-4 h-4 mr-5",
      horizontalLine: "w-full h-[0.5px]",
      verticalLine: "h-full w-[0.5px]",
      answerPadding: "pb-4 px-34",
    },
    medium: {
      question: "text-[24px] md:text-[32px]",
      answer: "text-[16px] md:text-[18px]",
      padding: "py-2 md:py-3",
      icon: "w-5 h-5 md:w-8 md:h-8 mr-6",
      horizontalLine: "w-full h-[0.8px]",
      verticalLine: "h-full w-[0.8px]",
      answerPadding: "pb-6",
    },
    large: {
      question: "text-[28px] md:text-[36px] lg:text-[43.648px]",
      answer: "text-[16px] md:text-[19.6864px]",
      padding: "py-3 md:py-4",
      icon: "w-6 h-6 md:w-8 md:h-8 mr-7",
      horizontalLine: "w-full h-[1px]",
      verticalLine: "h-full w-[1px]",
      answerPadding: "pb-8",
    },
  };

  const styles = sizeStyles[size];

  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, index) => (
        <div key={index} className="border-y border-primary">
          <button
            onClick={() => toggleItem(index)}
            className={cn(
              "w-full flex items-center text-left transition-opacity",
              styles.padding,
              iconPosition === "first" ? "flex-row" : "flex-row",
            )}
            aria-expanded={isOpen(index)}
          >
            {/* Icon - First Position */}
            {iconPosition === "first" && (
              <div
                className={cn(
                  "shrink-0 flex items-center justify-center relative mr-4",
                  styles.icon,
                )}
              >
                {/* Horizontal line */}
                <div
                  className={cn(
                    "absolute bg-primary transition-all duration-300 ease-in-out",
                    styles.horizontalLine,
                  )}
                ></div>
                {/* Vertical line (animates to minus) */}
                <div
                  className={cn(
                    "absolute bg-primary transition-all duration-300 ease-in-out origin-center",
                    styles.verticalLine,
                    isOpen(index) ? "-rotate-90" : "rotate-0",
                  )}
                ></div>
              </div>
            )}

            {/* Question Text */}
            <span
              className={cn(
                "font-medium text-primary flex-1",
                styles.question,
                iconPosition === "last" && "pr-4",
              )}
              style={{ lineHeight: "1.2" }}
            >
              {item.question}
            </span>

            {/* Icon - Last Position */}
            {iconPosition === "last" && (
              <div
                className={cn(
                  "shrink-0 flex items-center justify-center relative font-thin",
                  styles.icon,
                )}
              >
                {/* Horizontal line */}
                <div
                  className={cn(
                    "absolute bg-primary transition-all duration-300 ease-in-out",
                    styles.horizontalLine,
                  )}
                ></div>
                {/* Vertical line (animates to minus) */}
                <div
                  className={cn(
                    "absolute bg-primary transition-all duration-300 ease-in-out origin-center",
                    styles.verticalLine,
                    isOpen(index) ? "rotate-90 scale-0" : "rotate-0 scale-100",
                  )}
                ></div>
              </div>
            )}
          </button>

          {/* Answer Section with Animation */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-400 ease-in-out",
              isOpen(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <p
              className={cn(
                "font-normal text-primary",
                styles.answer,
                styles.answerPadding,
              )}
              style={{ lineHeight: "31.5px" }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
