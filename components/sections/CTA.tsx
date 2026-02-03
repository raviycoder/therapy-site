"use client";

import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function CTA() {
  return (
    <section className="bg-accent px-6 md:px-12 lg:px-[57.6px] py-[100px] lg:py-[151px]">
      <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
        <FadeIn delay={0}>
          <h2
            className="text-[32px] md:text-[43.648px] font-medium text-[#FBF6F1] mb-6"
            style={{ lineHeight: "1.1" }}
          >
            Reconnect with yourself.
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p
            className="text-[16px] md:text-[19.6864px] font-medium text-[#FBF6F1] mb-12 max-w-[650px]"
            style={{ lineHeight: "1.6" }}
          >
            You don't have to keep pushing through the stress. Therapy can be
            the space you need to slow down, find your footing, and embrace a
            more sustainable way of living.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <Button
            href="#contact"
            variant="outline"
            className="border-[#FBF6F1] text-[#FBF6F1] hover:bg-[#FBF6F1] hover:text-[#223614] border-[0.8px] px-[28px] py-[14px] h-auto text-[14.1568px] uppercase tracking-wide"
          >
            CONTACT ME
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
