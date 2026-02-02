import Image from "next/image";
import Button from "../ui/Button";

export default function Support() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 relative min-h-[600px] lg:min-h-[861px]">
        <Image
          src="/images/image6.webp"
          alt="Person looking up with hope"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side - Content with Lavender Background */}
      <div className="lg:w-1/2 bg-[#C2BFCB] flex flex-col justify-between">
        {/* Text Content Area */}
        <div className="px-[57.6px] pt-[72px] pb-[72px] flex-1 flex flex-col justify-center">
          {/* Main Heading */}
          <h2
            className="text-[52.864px] font-medium text-primary mb-[32px]"
            style={{ lineHeight: "58.3619px" }}
          >
            You don't have to do this all <em className="italic">alone.</em>
          </h2>

          {/* Subheading */}
          <p
            className="text-[19.6864px] font-normal text-primary mb-[37.3px]"
            style={{ lineHeight: "31.4982px" }}
          >
            If you are facing any of these, there's hope:
          </p>

          {/* Bullet List */}
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

          {/* Bottom Paragraph */}
          <p
            className="text-[19.6864px] font-normal text-primary"
            style={{ lineHeight: "31.4982px" }}
          >
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
        </div>

        {/* Button at Bottom - Full Width */}
        <Button variant="full" href="#contact">
          WORK WITH ME
        </Button>
      </div>
    </section>
  );
}
