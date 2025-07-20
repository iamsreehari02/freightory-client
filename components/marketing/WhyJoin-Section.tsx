import TextH3 from "@/components/typography/TextH3";
import TextP from "@/components/typography/TextP";
import FeatureBox from "@/components/FeatureBox";
import { features } from "@/lib/utils";

export default function WhyJoinSection() {
  return (
    <section className="w-full py-20 px-6 bg-[#FBFBFE]">
      <div className="max-w-4xl mx-auto  mb-12">
        <TextH3 className="mb-4 text-center">Why Join Our Network</TextH3>
        <TextP className="text-muted-foreground text-lg text-center mx-auto">
          Built by logistics professionals for logistics professionals. <br />
          Our platform connects freight forwarders, NVOCCs, and shipping agents
          in a trusted global network.
        </TextP>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <FeatureBox
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
