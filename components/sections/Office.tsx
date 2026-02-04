import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const officeImages = [
  {
    src: "/images2/office1.webp",
    alt: "Welcoming waiting area with natural light",
  },
  {
    src: "/images2/office2.webp",
    alt: "Comfortable therapy room with cozy seating",
  },
  {
    src: "/images2/office3.webp",
    alt: "Calming office details and decor",
  },
];

export default function Office() {
  return (
    <section id="office" className="bg-background py-16 lg:py-[101px]">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-[57.6px]">
        {/* Section Heading */}
        <FadeIn delay={0}>
          <h2
            className="text-[32px] md:text-[52.864px] font-medium text-primary text-center mb-6"
            style={{ lineHeight: "1.1" }}
          >
            A Safe Space in Santa Monica
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={100}>
          <p
            className="text-[16px] md:text-[19.6864px] font-normal text-primary text-center max-w-[800px] mx-auto mb-12 lg:mb-16"
            style={{ lineHeight: "1.6" }}
          >
            My Santa Monica office at 122nd St W is designed to feel calm,
            private, and welcoming. Natural light fills the space, creating a
            peaceful environment where you can explore your thoughts with
            empathy and safety.
          </p>
        </FadeIn>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeImages.map((image, index) => (
            <FadeIn key={index} delay={150 + index * 100}>
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Telehealth Note */}
        <FadeIn delay={500}>
          <p
            className="text-[14px] md:text-[16px] font-normal text-primary text-center mt-8 italic"
            style={{ lineHeight: "1.6" }}
          >
            I also offer secure telehealth sessions for clients located anywhere
            in California.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
