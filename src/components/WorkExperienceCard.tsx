import { cn } from "@/lib/utils";
import { ExpandableCard } from "./ExpandableCard"


export const WorkExperienceCard = ({
  src,
  title,
  ctaText,
  ctaLink,
  description,
  content,
  gradientDirection
}: {
  src: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  description: string;
  content: React.ReactNode;
  gradientDirection: "right" | "left"
}) => {
  return (
    <div className={cn(
        gradientDirection === "right" 
        ? "lg:bg-gradient-to-r bg-gradient-to-r" 
        : "lg:bg-gradient-to-l bg-gradient-to-r", 
        "from-[#130428] to-[#26094e] w-full h-[calc(100%-4px)] min-h-20 rounded-xl",
        "shadow-[0px_0px_20px_rgba(111,57,173,0.5),0px_0px_0px_-1px_rgba(133,94,197,0.25),inset_0px_0px_4px_rgba(161,117,227,0.5),inset_-0px_-0px_0px_rgba(79,34,141,0.35)]"
        )}>
      <ExpandableCard
        title={title}
        description={description}
        src={src}
        ctaText={ctaText}
        ctaLink={ctaLink}
        content={content}
      />
    </div>

  )
}