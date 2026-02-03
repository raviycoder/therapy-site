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
              You don't have to carry the weight{" "}
              <em className="italic">alone.</em>
            </h2>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={200}>
            <p
              className="text-[19.6864px] font-normal text-primary mb-[37.3px]"
              style={{ lineHeight: "31.4982px" }}
            >
              Many of my clients feel "functional" on the outside but are
              silently struggling with:
            </p>
          </FadeIn>

          {/* Bullet List */}
          <FadeIn delay={300}>
            <ul
              className="text-[19.6864px] font-normal text-primary mb-[42.5px] pl-[57.6px] list-disc"
              style={{ lineHeight: "41.4982px" }}
            >
              <li>Constant worry and overthinking</li>
              <li>Feeling emotionally on edge or tense</li>
              <li>Difficulty sleeping or relaxing</li>
              <li>Professional burnout and perfectionism</li>
              <li>Lingering effects of past experiences</li>
            </ul>
          </FadeIn>

          {/* Bottom Paragraph */}
          <FadeIn delay={400}>
            <p
              className="text-[19.6864px] font-normal text-primary"
              style={{ lineHeight: "31.4982px" }}
            >
              Sessions are structured to feel supportive, leaving space for
              reflection. We'll work together to help you feel more regulated in
              your daily life.
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
