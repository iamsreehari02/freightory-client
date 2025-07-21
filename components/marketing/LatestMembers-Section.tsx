import SectionHeader from "@/components/ui/section-header";
import MembersCard from "../ui/members-card";

export default function LatestMembersSection() {
  return (
    <section className="w-full py-20  bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Meet Our Latest Members"
          description="Discover leading freight forwarders and logistics professionals who recently joined our network."
          className="mb-12 max-w-3xl"
        />

        <div className="grid grid-cols-2 gap-6 ">
          <MembersCard
            name="Jane Doe"
            role="Freight Forwarder"
            company="Global Freight Co."
            avatarUrl="/assets/member.svg"
          />

          <MembersCard
            name="John Smith"
            role="Logistics Manager"
            company="OceanX Logistics"
            avatarUrl="/assets/member.svg"
          />
        </div>
      </div>
    </section>
  );
}
