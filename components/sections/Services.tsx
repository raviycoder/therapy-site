import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const specialties = [
  {
    title: "Anxiety Therapy",
    description:
      "Tools to manage panic, reduce tension, and stop overthinking, so you can feel more present and at ease.",
    image: "/images2/image3.webp",
    angle: "object-left",
  },
  {
    title: "Trauma & EMDR",
    description:
      "A safe, stabilized space to process past experiences and complex history, helping you feel regulated and safe daily.",
    image: "/images2/image4.webp",
    angle: "object-bottom-right",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For high-achievers feeling disconnected. We'll find sustainable ways to live and work so you can slow down.",
    image: "/images2/image5.webp",
    angle: "object-center",
  },
];

export default function Services() {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-[57.6px] pt-[100px] pb-[100px]">
      {/* Section Heading */}
      <FadeIn delay={0}>
        <h2
          className="text-[52.864px] font-medium text-primary text-center mb-[50px]"
          style={{ lineHeight: "84.5824px" }}
        >
          My Specialties
        </h2>
      </FadeIn>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {specialties.map((specialty, index) => (
          <FadeIn key={index} delay={100 + index * 150}>
            <div className="bg-background-light border-[0.8px] border-primary p-[20px] flex flex-col h-full">
              {/* Card Title */}
              <h3
                className="text-[19.6864px] font-normal text-primary mb-0"
                style={{ lineHeight: "21.7338px" }}
              >
                {specialty.title}
              </h3>

              {/* Card Description */}
              <p
                className="text-[14.1568px] font-normal text-primary mt-[41.8625px]"
                style={{ lineHeight: "21.4982px" }}
              >
                {specialty.description}
              </p>

              {/* Circular Image */}
              <div className="mx-auto mt-auto pt-[41.8625px]">
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{ width: "313.987px", height: "313.987px" }}
                >
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className={`object-cover ${specialty.angle} `}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
