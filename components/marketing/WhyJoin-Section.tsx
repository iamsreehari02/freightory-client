import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import FeatureBox from "@/components/FeatureBox";
import { features } from "@/lib/utils";
import Badge from "../ui/badge";
import SectionHeader from "../ui/section-header";

export default function WhyJoinSection() {
  return (
    <section className="w-full py-20 bg-[#FBFBFE]">
      <SectionHeader
        title="Why Join Our Network"
        description="Built by logistics professionals for logistics professionals. Our platform connects freight forwarders, NVOCCs, and shipping agents in a trusted global network."
        className="mb-12 max-w-4xl"
      />

      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <FeatureBox
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Badge
        bgColor="#6467F21A"
        textColor="text-primary"
        dotColor="#10B981"
        showDot
      >
        5,000+ Active Members Online
      </Badge>
    </section>
  );
}
