import Image from "next/image";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function Support() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <FadeIn
        className="lg:w-1/2 relative min-h-[600px] lg:min-h-[861px]"
        delay={0}
      >
        <Image
          src="/images/image6.webp"
          alt="Person looking up with hope"
          fill
          className="object-cover"
        />
      </FadeIn>

      {/* Right Side - Content with Lavender Background */}
      <div className="lg:w-1/2 bg-accent-200 flex flex-col justify-between">
        {/* Text Content Area */}
        <div className="px-[57.6px] pt-[72px] pb-[72px] flex-1 flex flex-col justify-center">
          {/* Main Heading */}
          <FadeIn delay={100}>
            <h2
              className="text-[52.864px] font-medium text-primary mb-[32px]"
              style={{ lineHeight: "58.3619px" }}
            >
              You don't have to do this all <em className="italic">alone.</em>
            </h2>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={200}>
            <p
              className="text-[19.6864px] font-normal text-primary mb-[37.3px]"
              style={{ lineHeight: "31.4982px" }}
            >
              If you are facing any of these, there's hope:
            </p>
          </FadeIn>

          {/* Bullet List */}
          <FadeIn delay={300}>
            <ul
              className="text-[19.6864px] font-normal text-primary mb-[42.5px] pl-[57.6px] list-disc"
              style={{ lineHeight: "41.4982px" }}
            >
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>
          </FadeIn>

          {/* Bottom Paragraph */}
          <FadeIn delay={400}>
            <p
              className="text-[19.6864px] font-normal text-primary"
              style={{ lineHeight: "31.4982px" }}
            >
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>
          </FadeIn>
        </div>

        {/* Button at Bottom - Full Width */}
        <FadeIn delay={500}>
          <Button variant="full" href="#contact">
            WORK WITH ME
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
