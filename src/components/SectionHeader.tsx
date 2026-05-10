import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-10 bg-primary/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium font-serif">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-primary/60" />
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
