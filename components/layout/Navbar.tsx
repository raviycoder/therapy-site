export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[57.6px] py-[12.36px]">
      <div
        className="text-[34.432px] font-medium text-primary"
        style={{ lineHeight: "41.3184px" }}
      >
        Lilac Template
      </div>
      <div className="flex gap-[45px] text-[19.7px] font-normal">
        <a
          href="#blog"
          className="text-primary py-[1.96px] hover:opacity-70 transition-opacity"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="text-primary py-[1.96px] hover:opacity-70 transition-opacity"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
