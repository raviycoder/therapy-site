import FadeIn from "../ui/FadeIn";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer - #FBF6F1 */}
      <div className="bg-background py-[50.7px] px-6 md:px-12 lg:px-[57.6px] pb-25">
        <div className="max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left Column - Branding & Contact (Approx 50% width -> 6 cols) */}
            <FadeIn className="md:col-span-7 space-y-8" delay={0}>
              <h3
                className="text-[32px] md:text-[43.648px] font-medium text-[#223614]"
                style={{ lineHeight: "1.2" }}
              >
                Lilac Template
              </h3>

              <div className="space-y-6">
                <div className="space-y-0">
                  <p
                    className="text-[19.6864px] text-[#223614]"
                    style={{ lineHeight: "31.4982px" }}
                  >
                    123 Example Road
                  </p>
                  <p
                    className="text-[19.6864px] text-[#223614]"
                    style={{ lineHeight: "31.4982px" }}
                  >
                    Minneapolis, MN
                  </p>
                </div>

                <div className="space-y-0">
                  <a
                    href="mailto:email@example.com"
                    className="block text-[19.6864px] text-[#223614] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                    style={{ lineHeight: "31.4982px" }}
                  >
                    email@example.com
                  </a>
                  <a
                    href="tel:5555555555"
                    className="block text-[19.6864px] text-[#223614] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                    style={{ lineHeight: "31.4982px" }}
                  >
                    (555) 555-5555
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Middle Column - Hours (Approx 25% width -> 3 cols) */}
            <FadeIn
              className="md:col-span-2 md:pl-18 md:text-nowrap"
              delay={100}
            >
              <h4
                className="text-[28px] md:text-[34.4982px] font-medium text-[#223614] mb-5"
                style={{ lineHeight: "2.2" }}
              >
                Hours
              </h4>
              <div className="space-y-0">
                <p
                  className="text-[19.6864px] text-[#223614]"
                  style={{ lineHeight: "31.4982px" }}
                >
                  Monday – Friday
                </p>
                <p
                  className="text-[19.6864px] text-[#223614]"
                  style={{ lineHeight: "31.4982px" }}
                >
                  10am – 6pm
                </p>
              </div>
            </FadeIn>

            {/* Right Column - Find/Navigation (Approx 25% width -> 3 cols) */}
            <FadeIn className="md:col-span-3 md:text-right" delay={200}>
              <h4
                className="text-[28px] md:text-[34.4982px] font-medium text-[#223614] mb-5"
                style={{ lineHeight: "2.2" }}
              >
                Find
              </h4>
              <nav className="flex flex-col space-y-0 items-start md:items-end">
                <a
                  href="#"
                  className="text-[19.6864px] text-[#223614] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                  style={{ lineHeight: "31.4982px" }}
                >
                  Home
                </a>
                <a
                  href="#contact"
                  className="text-[19.6864px] text-[#223614] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                  style={{ lineHeight: "31.4982px" }}
                >
                  Contact
                </a>
                <a
                  href="#blog"
                  className="text-[19.6864px] text-[#223614] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                  style={{ lineHeight: "31.4982px" }}
                >
                  Blog
                </a>
              </nav>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Footer - #E5E0DA */}
      <FadeIn delay={300}>
        <div className="bg-background-light py-[15.4px] px-6 md:px-12 lg:px-[57.6px]">
          <div className="max-w-[1536px] mx-auto flex flex-col items-center text-center space-y-4">
            {/* Policy Links */}
            <div className="flex flex-col gap-y-4 my-12">
              {" "}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[16px] text-[#223614]">
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-[#223614]"
                >
                  Privacy & Cookies Policy
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-[#223614]"
                >
                  Good Faith Estimate
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-[#223614]"
                >
                  Website Terms & Conditions
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity border-b border-[#223614]"
                >
                  Disclaimer
                </a>
              </div>
              <p
                className="text-[16.6864px] text-[#223614]"
                style={{ lineHeight: "31.4982px" }}
              >
                Website Template Credits:{" "}
                <a
                  href="https://gobloomcreative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  Go Bloom Creative
                </a>
              </p>
            </div>

            {/* Credits & Copyright */}
            <div className="space-y-0">
              <p
                className="text-[16.6864px] text-[#223614]"
                style={{ lineHeight: "31.4982px" }}
              >
                All Rights Reserved © 2024 Your Business Name Here, LLC.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
