import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text" | "full";
  className?: string;
  href?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "outline",
  className = "",
  href,
  showArrow = true,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-white hover:text-primary border border-primary",
    outline:
      "border-[0.8px] border-primary text-primary hover:bg-primary hover:text-white px-[22px] py-[10px] text-[13px] tracking-widest",
    text: "text-primary hover:opacity-70 padding-0 border-0",
    full: "w-full border-t-[0.8px] border-primary text-primary hover:bg-primary hover:text-white px-[28.3px] h-[72px] text-[14.2px] tracking-normal",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  const content = (
    <>
      {children}
      {showArrow && <span className="ml-2 text-[1.1em]">→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
