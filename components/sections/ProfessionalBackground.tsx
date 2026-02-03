import Accordion, { AccordionItem } from "../ui/Accordion";
import FadeIn from "../ui/FadeIn";

const backgroundData: AccordionItem[] = [
  {
    question: "Education",
    answer:
      "Psy.D. in Clinical Psychology from Pepperdine University. B.A. in Psychology from UCLA. Specialization in Trauma and Anxiety disorders.",
  },
  {
    question: "Licensure",
    answer:
      "Licensed Clinical Psychologist in California (PSY 12345). Certified EMDR Therapist. Member of the American Psychological Association (APA).",
  },
  {
    question: "Specialized Training",
    answer:
      "Advanced training in EMDR (Eye Movement Desensitization and Reprocessing), Cognitive Behavioral Therapy (CBT), and Mindfulness-Based Stress Reduction (MBSR).",
  },
];

export default function ProfessionalBackground() {
  return (
    <section
      id="professional-background"
      className="bg-background-light relative overflow-hidden"
    >
      <div className="max-w-[1536px] mx-auto py-16 lg:py-[101px] px-6 md:px-12 lg:px-[57.6px]">
        {/* Section Heading */}
        <FadeIn delay={0}>
          <h3
            className="text-[32px] md:text-[43.648px] font-medium text-primary text-center mb-12 md:mb-16 lg:mb-10"
            style={{ lineHeight: "1.2" }}
          >
            My Professional Background
          </h3>
        </FadeIn>

        {/* Accordion Content */}
        <FadeIn delay={150}>
          <div className="max-w-[740px] mx-auto">
            <Accordion
              items={backgroundData}
              size="small"
              iconPosition="last"
              allowMultiple={false}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
