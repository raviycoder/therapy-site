import Link from "next/link";
import FadeIn from "../ui/FadeIn";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer - bg-background */}
      <div className="bg-background py-12 px-6 md:px-12 lg:px-14 pb-24">
        <div className="max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left Column - Branding & Contact (Approx 50% width -> 6 cols) */}
            <FadeIn className="md:col-span-7 space-y-8" delay={0}>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground"
                style={{ lineHeight: "1.2" }}
              >
                Dr. Maya Reynolds, PsyD
              </h3>

              <div className="space-y-6">
                <div className="space-y-0">
                  <p className="text-xl text-foreground leading-relaxed">
                    123th Street 45 W
                  </p>
                  <p className="text-xl text-foreground leading-relaxed">
                    Santa Monica, CA 90401
                  </p>
                </div>

                <div className="space-y-0">
                  <Link
                    href="mailto:contact@drmayareynolds.com"
                    className="block text-xl text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity leading-relaxed"
                  >
                    contact@drmayareynolds.com
                  </Link>
                  <Link
                    href="tel:5551234567"
                    className="block text-xl text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity leading-relaxed"
                  >
                    (555) 123-4567
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Middle Column - Hours (Approx 25% width -> 3 cols) */}
            <FadeIn
              className="md:col-span-2 md:pl-18 md:text-nowrap"
              delay={100}
            >
              <h4
                className="text-3xl md:text-4xl font-medium text-foreground mb-5"
                style={{ lineHeight: "2.2" }}
              >
                Hours
              </h4>
              <div className="space-y-0">
                <p className="text-xl text-foreground leading-relaxed">
                  Monday – Friday
                </p>
                <p className="text-xl text-foreground leading-relaxed">
                  9am – 5pm
                </p>
              </div>
            </FadeIn>

            {/* Right Column - Find/Navigation (Approx 25% width -> 3 cols) */}
            <FadeIn className="md:col-span-3 md:text-right" delay={200}>
              <h4
                className="text-3xl md:text-4xl font-medium text-foreground mb-5"
                style={{ lineHeight: "2.2" }}
              >
                Find
              </h4>
              <nav className="flex flex-col space-y-0 items-start md:items-end">
                <Link
                  href="#"
                  className="text-xl text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity leading-relaxed"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-xl text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity leading-relaxed"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-xl text-foreground underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity leading-relaxed"
                >
                  Contact
                </Link>
              </nav>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Footer - bg-background-light */}
      <FadeIn delay={300}>
        <div className="bg-background-light py-4 px-6 md:px-12 lg:px-14">
          <div className="max-w-[1536px] mx-auto flex flex-col items-center text-center space-y-4">
            {/* Policy Links */}
            <div className="flex flex-col gap-y-4 my-12">
              {" "}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base text-foreground">
                <Link
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-foreground"
                >
                  Privacy & Cookies Policy
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-foreground"
                >
                  Good Faith Estimate
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-foreground"
                >
                  Website Terms & Conditions
                </Link>
                <Link
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-foreground"
                >
                  Disclaimer
                </Link>
              </div>
              <p className="text-base text-foreground leading-relaxed">
                Website Template Credits:{" "}
                <Link
                  href="https://gobloomcreative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Go Bloom Creative
                </Link>
              </p>
            </div>

            {/* Credits & Copyright */}
            <div className="space-y-0">
              <p className="text-base text-foreground leading-relaxed">
                All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
