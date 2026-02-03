import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  heading = "Therapy for High-Achieving Adults in Santa Monica",
  subheading = "Find a safe, grounded space to release tension, heal from the past, and reconnect with your true self.",
  ctaText = "BOOK A FREE CONSULTATION",
  ctaHref = "#contact",
  imageSrc = "/image1.png",
  imageAlt = "Dr. Maya Reynolds, Psychologist",
}: HeroProps) {
  return (
    <section className="bg-background min-h-screen">
      {/* Hero Content - Exact matching based on reference styles */}
      <div className="pt-[100px] lg:pt-[120px] px-6 lg:px-[57.6px]">
        <div className="flex flex-col lg:flex-row justify-between gap-16 items-center max-w-[1300px]">
          {/* Left Side - Image with Arch Frame */}
          <FadeIn
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
            delay={0}
          >
            <div className="relative w-full max-w-[574px] aspect-4/6 max-sm:max-w-[200px] overflow-hidden rounded-[300px_300px_0_0]">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  priority
                />
              )}
            </div>
          </FadeIn>

          {/* Right Side - Content */}
          <div className="flex flex-col text-center lg:text-center items-center lg:-mt-30 lg:items-center lg:w-1/2">
            <FadeIn delay={100}>
              <h1
                className="text-[80.512px] font-medium text-primary mb-[32px]"
                style={{ lineHeight: "83.0884px" }}
              >
                Live your life
                <br />
                in full bloom
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-[19.7px] font-normal leading-[31.5px] text-primary mb-[32px]">
                {subheading}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <Button href={ctaHref}>{ctaText}</Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
