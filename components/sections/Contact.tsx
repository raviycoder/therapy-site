import Image from "next/image";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E5E0DA] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1536px] mx-auto py-12 lg:py-[101px]">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 lg:pl-[117.25px] flex flex-col justify-center order-2 lg:order-1">
          <h2
            className="text-[32px] md:text-[44px] lg:text-[52.864px] font-medium text-primary mb-4 md:mb-6 lg:mb-[32px]"
            style={{ lineHeight: "1.1" }}
          >
            Hi, I'm Lilac.
          </h2>

          <p
            className="text-[15px] md:text-[17px] lg:text-[19.6864px] font-normal text-primary mb-8 md:mb-10 lg:mb-12 max-w-[645px]"
            style={{ lineHeight: "1.6" }}
          >
            I&apos;m committed to providing a safe and supportive environment
            where we can explore your thoughts, feelings, and behaviors. With
            empathy and guidance, we&apos;ll work together to navigate the
            challenges life throws your way.
          </p>

          <div className="flex justify-center">
            <Button
              variant="outline"
              href="#contact"
              className="px-[28.31px] py-[14.15px] border-[0.8px] text-[13px] md:text-[14.15px] uppercase tracking-widest hover:bg-primary hover:text-[#E5E0DA]"
            >
              LET&apos;S CHAT
            </Button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="w-full lg:w-1/2 relative h-[380px] md:h-[500px] lg:h-[755px] order-1 lg:order-2 lg:mb-0">
          {/* Main Arch Image */}
          <div className="absolute top-8 md:top-12 lg:top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[50px] xl:left-[100px] w-[240px] md:w-[320px] lg:w-[436px] h-[280px] md:h-[380px] lg:h-[654px] rounded-[140px_140px_0_0] md:rounded-[190px_190px_0_0] lg:rounded-[323px_323px_0_0] overflow-hidden z-10">
            <Image
              src="/images/image7.webp"
              alt="Woman with lilac flowers hiding face"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Circular Image */}
          <div className="absolute bottom-4 md:bottom-8 lg:bottom-0 right-8 md:right-12 lg:left-auto lg:right-[60px] xl:right-[100px] w-[160px] md:w-[220px] lg:w-[320px] h-[160px] md:h-[220px] lg:h-[320px] rounded-full overflow-hidden z-20">
            <Image
              src="/images/image8.webp"
              alt="White lilac flowers close up"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
