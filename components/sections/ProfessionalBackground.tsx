import Accordion, { AccordionItem } from "../ui/Accordion";

const backgroundData: AccordionItem[] = [
  {
    question: "Education",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Licensure",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    question: "Certifications",
    answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

export default function ProfessionalBackground() {
  return (
    <section
      id="professional-background"
      className="bg-[#E5E0DA] relative overflow-hidden"
    >
      <div className="max-w-[1536px] mx-auto py-16 lg:py-[101px] px-6 md:px-12 lg:px-[57.6px]">
        {/* Section Heading */}
        <h3
          className="text-[32px] md:text-[43.648px] font-medium text-primary text-center mb-12 md:mb-16 lg:mb-10"
          style={{ lineHeight: "1.2" }}
        >
          My Professional Background
        </h3>

        {/* Accordion Content */}
        <div className="max-w-[740px] mx-auto">
          <Accordion
            items={backgroundData}
            size="small"
            iconPosition="last"
            allowMultiple={false}
          />
        </div>
      </div>
    </section>
  );
}
