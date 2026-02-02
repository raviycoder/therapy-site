import Image from "next/image";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="about" className="flex flex-col lg:flex-row bg-[#E5E0DA]">
      {/* Left Side - Text Content + Button */}
      <div className="lg:w-1/2 flex flex-col justify-between">
        {/* Text Content Area */}
        <div className="px-[57.6px] pt-[72px] pb-[72px] flex-1 flex flex-col justify-center">
          <h2
            className="text-[52.864px] font-medium text-primary mb-[32px]"
            style={{ lineHeight: "58.3619px" }}
          >
            Live a fulfilling life.
          </h2>

          <div
            className="text-[19.6864px] font-normal text-primary space-y-4"
            style={{ lineHeight: "31.4982px" }}
          >
            <p>
              Life can be challenging—especially when you&apos;re trying to
              balance your personal and professional life.
            </p>
            <p>
              It&apos;s easy to feel like you&apos;re alone in facing these
              challenges, but I want you to know that I&apos;m here to help.
            </p>
          </div>
        </div>

        {/* Button at Bottom - Full Width */}
        <Button variant="full" href="#contact">
          GET IN TOUCH
        </Button>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 relative min-h-[700px]">
        <Image
          src="/images/image2.webp"
          alt="Coffee, flowers and notebook on fabric"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
