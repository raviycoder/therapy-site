import Image from "next/image";
import Button from "../ui/Button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  heading = "Live your life in full bloom",
  subheading = "Therapy for Adults in Minneapolis, MN.",
  ctaText = "CONNECT WITH ME",
  ctaHref = "#contact",
  imageSrc = "/image1.png",
  imageAlt = "Person holding flowers",
}: HeroProps) {
  return (
    <section className="bg-background min-h-screen">
      {/* Hero Content - Exact matching based on reference styles */}
      <div className="pt-[55px] px-[57.6px]">
        <div className="flex flex-col lg:flex-row justify-between gap-16 items-center max-w-[1300px]">
          {/* Left Side - Image with Arch Frame */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[574px] aspect-4/6 overflow-hidden rounded-[300px_300px_0_0]">
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
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col text-center lg:text-center items-center lg:-mt-30 lg:items-center lg:w-1/2">
            <h1
              className="text-[80.512px] font-medium text-primary mb-[32px]"
              style={{ lineHeight: "83.0884px" }}
            >
              Live your life
              <br />
              in full bloom
            </h1>

            <p className="text-[19.7px] font-normal leading-[31.5px] text-primary mb-[32px]">
              {subheading}
            </p>

            <Button href={ctaHref}>{ctaText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
