import { cn } from "@/lib/utils";

export const FooterBG = ({
  className,
  gradientFrom = "#fff",
  gradientTo = "#63e",
  gradientSize = "125% 125%",
  gradientPosition = "50% 10%",
  gradientStop = "40%",
}) => {
  return (
    <div
      className={cn("absolute inset-0 w-full h-full -z-10 bg-white max-w-[1200px] mx-auto", className)}
      style={{
        background: `radial-gradient(${gradientSize} at ${gradientPosition}, ${gradientFrom} ${gradientStop}, ${gradientTo} 100%)`,
      }}
    />
  );
};
